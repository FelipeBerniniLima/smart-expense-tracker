// import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow cross - origin requests
app.use(express.json()); // Parse JSON bodies

// Basic rout to test the server
app.get('/', (req, res) => {
    res.json({
        message: 'Smart Expense Tracker API is running!' ,
        timestamp: new Date().toISOString()
    });
});

// Test route for expenses
app.get('/api/expenses', (req, res) => {
    res.json({
        message: 'Expenses endpoint working!' , 
        expenses: []
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Crtl+C to stop the server');
});
