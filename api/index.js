// api/index.js
import { Pool } from '@neondatabase/serverless';

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/contact') {
    try {
      const { firstName, lastName, email, projectType, budget, message } = req.body;

      // Validación básica
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      // Insertar en la base de datos
      const client = await pool.connect();
      try {
        const result = await client.query(
          'INSERT INTO contacts (first_name, last_name, email, project_type, budget, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
          [firstName, lastName, email, projectType || null, budget || null, message]
        );

        res.status(200).json({
          success: true,
          message: "Thank you for your message! I'll get back to you soon.",
          contactId: result.rows[0].id
        });
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again.'
      });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}