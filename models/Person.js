const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [0, 'Age must be a positive number'],
        max: [150, 'Age must be realistic']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: {
            values: ['Male', 'Female', 'Other'],
            message: 'Gender must be Male, Female, or Other'
        }
    },
    mobileNumber: {
        type: String,
        required: [true, 'Mobile number is required'],
        trim: true,
        validate: {
            validator: function (v) {
                // Validates 10-digit mobile numbers
                return /^\d{10}$/.test(v);
            },
            message: 'Mobile number must be exactly 10 digits'
        }
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Person', personSchema);
