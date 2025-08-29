// import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import database connection
const pool = require('./db'); // loads db.js

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

// Get expenses with group and user information
app.get('/api/expenses', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        e.id,
        e.description,
        e.amount,
        e.category,
        e.date,
        u.name as paid_by_name,
        g.name as group_name
      FROM expenses e
      JOIN users u ON e.paid_by = u.id
      JOIN groups g ON e.group_id = g.id
      ORDER BY e.created_at DESC
    `);
    
    res.json({
      message: 'Expenses retrieved successfully!',
      expenses: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({
      message: 'Error fetching expenses',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Crtl+C to stop the server');
});
