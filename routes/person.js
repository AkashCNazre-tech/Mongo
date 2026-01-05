const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// GET /person - List all people
router.get('/', async (req, res) => {
    try {
        const people = await Person.find().sort({ createdAt: -1 });
        res.render('person/list', {
            people,
            title: 'People List'
        });
    } catch (error) {
        console.error('Error fetching people:', error);
        res.status(500).send('Error fetching people');
    }
});

// GET /person/create - Show create form
router.get('/create', (req, res) => {
    res.render('person/create', {
        title: 'Add New Person',
        errors: null
    });
});

// POST /person - Create new person
router.post('/', async (req, res) => {
    try {
        const { name, age, gender, mobileNumber } = req.body;

        const person = new Person({
            name,
            age,
            gender,
            mobileNumber
        });

        await person.save();
        res.redirect('/person');
    } catch (error) {
        console.error('Error creating person:', error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.render('person/create', {
                title: 'Add New Person',
                errors,
                formData: req.body
            });
        }

        res.status(500).send('Error creating person');
    }
});

// GET /person/edit/:id - Show edit form
router.get('/edit/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);

        if (!person) {
            return res.status(404).send('Person not found');
        }

        res.render('person/edit', {
            person,
            title: 'Edit Person',
            errors: null
        });
    } catch (error) {
        console.error('Error fetching person:', error);
        res.status(500).send('Error fetching person');
    }
});

// POST /person/update/:id - Update person
router.post('/update/:id', async (req, res) => {
    try {
        const { name, age, gender, mobileNumber } = req.body;

        const person = await Person.findByIdAndUpdate(
            req.params.id,
            { name, age, gender, mobileNumber },
            {
                new: true,
                runValidators: true
            }
        );

        if (!person) {
            return res.status(404).send('Person not found');
        }

        res.redirect('/person');
    } catch (error) {
        console.error('Error updating person:', error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            const person = await Person.findById(req.params.id);
            return res.render('person/edit', {
                person: { ...person._doc, ...req.body },
                title: 'Edit Person',
                errors
            });
        }

        res.status(500).send('Error updating person');
    }
});

// POST /person/delete/:id - Delete person
router.post('/delete/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);

        if (!person) {
            return res.status(404).send('Person not found');
        }

        res.redirect('/person');
    } catch (error) {
        console.error('Error deleting person:', error);
        res.status(500).send('Error deleting person');
    }
});

module.exports = router;
