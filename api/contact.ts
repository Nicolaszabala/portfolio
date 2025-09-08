// api/contact.ts - Archivo para Vercel Functions
import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { pgTable, text, serial } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { eq } from 'drizzle-orm';
import ws from 'ws';

// Schema definitions
const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  projectType: text('project_type'),
  budget: text('budget'),
  message: text('message').notNull(),
});

const insertContactSchema = createInsertSchema(contacts).pick({
  firstName: true,
  lastName: true,
  email: true,
  projectType: true,
  budget: true,
  message: true,
});

// Database setup
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set. Did you forget to provision a database?');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool, schema: { contacts } });

// Storage class
class DatabaseStorage {
  async createContact(insertContact: any) {
    const [contact] = await db
      .insert(contacts)
      .values({
        ...insertContact,
        projectType: insertContact.projectType || null,
        budget: insertContact.budget || null,
      })
      .returning();
    return contact;
  }
}

const storage = new DatabaseStorage();

// Vercel Function Handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
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
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const contactData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(contactData);
    
    res.status(200).json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
      contactId: contact.id,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: error.errors,
      });
    } else {
      console.error('Contact creation error:', error);
      res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again.',
      });
    }
  }
}