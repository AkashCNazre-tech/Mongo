require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/persondb';

console.log('🔌 Attempting to connect to MongoDB...');
console.log('📍 Connection URI:', MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@')); // Hide password in logs

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
    console.log('📊 Database:', mongoose.connection.name);
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    console.log('\n⚠️  TROUBLESHOOTING:');
    console.log('   1. Make sure MongoDB is running locally, OR');
    console.log('   2. Create a .env file with MONGODB_URI for MongoDB Atlas');
    console.log('   3. Check README.md for detailed setup instructions\n');
  });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const personRoutes = require('./routes/person');
app.use('/person', personRoutes);

// Home Route - Redirect to person list
app.get('/', (req, res) => {
  res.redirect('/person');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📋 Person Management: http://localhost:${PORT}/person`);
});
