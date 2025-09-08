import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { eq } from 'drizzle-orm';
import { contacts, type InsertContact } from '@shared/schema';
import ws from 'ws';

// Configurar WebSocket para Neon
neonConfig.webSocketConstructor = ws;

// Configurar base de datos
let db: ReturnType<typeof drizzle>;

function getDb() {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL must be set. Did you forget to provision a database?');
    }

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle({ client: pool, schema: { contacts } });
  }
  return db;
}

// Clase de almacenamiento
class DatabaseStorage {
  async createContact(insertContact: InsertContact) {
    try {
      const database = getDb();
      const [contact] = await database
        .insert(contacts)
        .values({
          firstName: insertContact.firstName,
          lastName: insertContact.lastName,
          email: insertContact.email,
          projectType: insertContact.projectType || null,
          budget: insertContact.budget || null,
          message: insertContact.message,
        })
        .returning();
      
      return contact;
    } catch (error) {
      console.error('Database error:', error);
      throw new Error('Failed to create contact');
    }
  }

  async getContacts() {
    try {
      const database = getDb();
      const allContacts = await database.select().from(contacts);
      return allContacts;
    } catch (error) {
      console.error('Database error:', error);
      throw new Error('Failed to get contacts');
    }
  }

  async getContactById(id: number) {
    try {
      const database = getDb();
      const [contact] = await database
        .select()
        .from(contacts)
        .where(eq(contacts.id, id));
      
      return contact;
    } catch (error) {
      console.error('Database error:', error);
      throw new Error('Failed to get contact');
    }
  }
}

export const storage = new DatabaseStorage();