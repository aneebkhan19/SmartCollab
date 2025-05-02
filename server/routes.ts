import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { contactSubmissions, contactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate the request body using the schema
      const validatedData = contactSubmissionSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        // Return validation errors if schema validation fails
        return res.status(400).json({ 
          success: false, 
          message: 'Validation failed', 
          errors: validatedData.error.errors 
        });
      }
      
      // Insert the form data into the database
      const result = await db.insert(contactSubmissions).values(validatedData.data).returning();
      
      console.log('Contact form submission saved:', result[0]);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Consultation request received successfully!',
        id: result[0].id
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Server error processing request' 
      });
    }
  });

  // API endpoint to get all contact form submissions
  app.get('/api/contact', async (req: Request, res: Response) => {
    try {
      const submissions = await db.select().from(contactSubmissions);
      
      return res.status(200).json({ 
        success: true, 
        data: submissions
      });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Server error fetching submissions' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
