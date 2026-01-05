# Person Management System

A full-stack CRUD application built with Node.js, Express, MongoDB (Mongoose), and EJS for managing person records.

## Features

- ✅ Create, Read, Update, Delete (CRUD) operations for Person records
- ✅ Server-side rendering with EJS templates
- ✅ MongoDB database with Mongoose ODM
- ✅ Form validation (client-side and server-side)
- ✅ Responsive UI with Bootstrap 5
- ✅ Modern, clean interface with icons

## Person Schema

Each person record contains:
- **Name**: String (2-100 characters, required)
- **Age**: Number (0-150, required)
- **Gender**: Enum (Male/Female/Other, required)
- **Mobile Number**: String (10 digits, required)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation OR MongoDB Atlas account)
- npm or yarn

## Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**

   Choose one of the following options:

   ### Option A: Local MongoDB
   - Install MongoDB locally: https://www.mongodb.com/try/download/community
   - Start MongoDB service:
     ```bash
     # Windows
     net start MongoDB
     
     # macOS/Linux
     sudo systemctl start mongod
     ```
   - The application will connect to `mongodb://localhost:27017/persondb` by default

   ### Option B: MongoDB Atlas (Cloud)
   - Create a free account at https://www.mongodb.com/cloud/atlas
   - Create a new cluster
   - Get your connection string
   - Create a `.env` file in the project root:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/persondb?retryWrites=true&w=majority
     PORT=3000
     ```
   - Replace `username`, `password`, and `cluster` with your actual credentials

4. **Start the application**
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Access the application**
   
   Open your browser and navigate to: http://localhost:3000

## Project Structure

```
person-management/
├── models/
│   └── Person.js          # Mongoose schema and model
├── routes/
│   └── person.js          # Express routes for CRUD operations
├── views/
│   ├── person/
│   │   ├── list.ejs       # List all people
│   │   ├── create.ejs     # Create person form
│   │   └── edit.ejs       # Edit person form
│   └── layout.ejs         # Base template (optional)
├── public/
│   └── css/
│       └── style.css      # Custom styles
├── server.js              # Main application file
├── package.json           # Dependencies and scripts
└── .env.example           # Environment variables template
```

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/person` | List all people |
| GET | `/person/create` | Show create form |
| POST | `/person` | Create new person |
| GET | `/person/edit/:id` | Show edit form |
| POST | `/person/update/:id` | Update person |
| POST | `/person/delete/:id` | Delete person |

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML5, CSS3, Bootstrap 5, Bootstrap Icons
- **Middleware**: body-parser, method-override

## Validation Rules

- **Name**: Required, 2-100 characters
- **Age**: Required, must be between 0-150
- **Gender**: Required, must be Male, Female, or Other
- **Mobile Number**: Required, must be exactly 10 digits

## Troubleshooting

### MongoDB Connection Error

If you see "Error fetching people" or "Error creating person":

1. **Check if MongoDB is running**
   ```bash
   # Windows
   sc query MongoDB
   
   # macOS/Linux
   sudo systemctl status mongod
   ```

2. **Verify connection string** in `.env` file or use default local connection

3. **Check MongoDB Atlas whitelist** (if using Atlas):
   - Go to Network Access in Atlas dashboard
   - Add your IP address or allow access from anywhere (0.0.0.0/0)

### Port Already in Use

If port 3000 is already in use:
- Change the PORT in `.env` file
- Or stop the process using port 3000

## License

ISC

## Author

Created as a demonstration of CRUD operations with Node.js, Express, and MongoDB.
