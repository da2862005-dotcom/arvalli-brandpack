const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize PostgreSQL connection pool
// Railway automatically provides DATABASE_URL in the environment
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test DB Connection and Initialize Table
pool.connect()
  .then(async (client) => {
    console.log('Connected to PostgreSQL');
    
    // Automatically create the table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        requirement TEXT NOT NULL,
        budget VARCHAR(100) NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database table verified/created');
    client.release();
  })
  .catch(err => console.error('Database connection error', err.stack));

// Basic health check endpoint
app.get('/', (req, res) => {
  res.send('Arvalli BrandPack Backend is running!');
});

// 1. GET all inquiries (for Admin Dashboard)
app.get('/api/inquiries', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM inquiries ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

// 2. POST new inquiry (from Contact Form)
app.post('/api/inquiries', async (req, res) => {
  const { name, company_name, phone, email, requirement, budget } = req.body;
  
  if (!name || !company_name || !phone || !email || !requirement || !budget) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO inquiries (name, company_name, phone, email, requirement, budget, status)
       VALUES ($1, $2, $3, $4, $5, $6, 'new')
       RETURNING *`,
      [name, company_name, phone, email, requirement, budget]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save inquiry' });
  }
});

// 3. PATCH update inquiry status (for Admin Dashboard)
app.patch('/api/inquiries/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  try {
    const result = await pool.query(
      `UPDATE inquiries 
       SET status = $1, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $2 
       RETURNING *`,
      [status, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update inquiry' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
