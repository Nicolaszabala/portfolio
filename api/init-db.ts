// api/init-db.ts - Script para inicializar la base de datos
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from '@neondatabase/serverless';

// Database connection function
function getDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL must be set. Did you forget to provision a database?');
  }
  
  // Asegurar que la conexión use SSL
  let connectionString = process.env.DATABASE_URL;
  if (!connectionString.includes('sslmode=')) {
    connectionString += '?sslmode=require';
  }
  
  console.log('Connecting to database with SSL...');
  const pool = new Pool({ connectionString });
  return pool;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Init-db function called');
  console.log('Method:', req.method);
  console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST' && req.method !== 'GET') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    console.log('Starting database initialization...');
    const pool = getDatabase();
    console.log('Pool created successfully');
    
    const client = await pool.connect();
    console.log('Client connected successfully');
    
    try {
      console.log('Creating contacts table...');
      // Crear la tabla contacts si no existe
      await client.query(`
        CREATE TABLE IF NOT EXISTS contacts (
          id SERIAL PRIMARY KEY,
          first_name TEXT NOT NULL,
          last_name TEXT NOT NULL,
          email TEXT NOT NULL,
          project_type TEXT,
          budget TEXT,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      
      console.log('Table contacts created successfully');
      
      res.status(200).json({
        success: true,
        message: 'Database initialized successfully',
      });
    } finally {
      console.log('Releasing client connection...');
      client.release();
    }
  } catch (error) {
    console.error('Database initialization error:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });
    
    res.status(500).json({
      success: false,
      message: 'Failed to initialize database',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
