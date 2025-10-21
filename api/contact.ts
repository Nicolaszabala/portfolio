// api/contact.ts - Archivo para Vercel Functions
import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { Pool } from '@neondatabase/serverless';

// Schema de validación simple
const insertContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

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
  
  const pool = new Pool({ connectionString });
  return pool;
}

// Storage class usando SQL directo
class DatabaseStorage {
  async createContact(insertContact: any) {
    const pool = getDatabase();
    const client = await pool.connect();
    
    try {
      const result = await client.query(
        `INSERT INTO contacts (first_name, last_name, email, project_type, budget, message, created_at) 
         VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP) 
         RETURNING id, first_name, last_name, email, project_type, budget, message, created_at`,
        [
          insertContact.firstName,
          insertContact.lastName,
          insertContact.email,
          insertContact.projectType || null,
          insertContact.budget || null,
          insertContact.message
        ]
      );
      
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}

// Vercel Function Handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Request headers:', req.headers);
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ 
      success: false, 
      message: `Method ${req.method} not allowed. Only POST is supported.` 
    });
  }

  try {
    console.log('Received request body:', req.body);
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    
    const contactData = insertContactSchema.parse(req.body);
    console.log('Parsed contact data:', contactData);
    
    const storage = new DatabaseStorage();
    const contact = await storage.createContact(contactData);
    
    console.log('Contact created successfully:', contact);
    
    res.status(200).json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
      contactId: contact.id,
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors);
      res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: error.errors,
      });
    } else {
      console.error('Server error:', error);
      res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}