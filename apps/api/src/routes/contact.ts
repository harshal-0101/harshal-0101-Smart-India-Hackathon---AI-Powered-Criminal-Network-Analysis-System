import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { LeadModel } from '../models/Lead';
import { getDBStatus } from '../config/db';

const router = Router();

// In-memory fallback buffer in case MongoDB isn't reachable in local dev
const inMemoryLeads: any[] = [];

// Validation schema for agency inquiries
const ContactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required (min 2 characters)'),
  agency: z.string().min(2, 'Law enforcement agency / institution name is required'),
  role: z.string().min(2, 'Official role or rank is required'),
  officialEmail: z.string().email('Please enter a valid official institutional email address'),
  investigationScope: z.string().min(2, 'Please select or state your investigation scope'),
  message: z.string().optional().default(''),
});

router.post('/contact', async (req: Request, res: Response) => {
  try {
    const parseResult = ContactSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        success: false,
        errors: parseResult.error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
    }

    const leadData = {
      ...parseResult.data,
      ipAddress: req.ip || req.socket.remoteAddress || '127.0.0.1',
      createdAt: new Date(),
      status: 'PENDING',
    };

    const dbStatus = getDBStatus();
    let savedRecord: any = null;
    let storageMethod = 'in-memory-resilient-store';

    if (dbStatus.connected) {
      try {
        const lead = new LeadModel(leadData);
        savedRecord = await lead.save();
        storageMethod = 'mongodb';
      } catch (dbErr: any) {
        console.error('[DB WRITE ERROR] Fallback to in-memory store:', dbErr.message);
        inMemoryLeads.unshift(leadData);
        savedRecord = leadData;
      }
    } else {
      inMemoryLeads.unshift(leadData);
      savedRecord = leadData;
    }

    console.log(`[LEAD CAPTURED] From: ${leadData.fullName} (${leadData.agency}) - Scope: ${leadData.investigationScope} [Storage: ${storageMethod}]`);

    return res.status(201).json({
      success: true,
      message: 'Demo briefing request received. Investigative credential verification initiated.',
      leadId: savedRecord._id || `MEM-${Date.now()}`,
      storage: storageMethod,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('[API ERROR] /api/contact:', err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error processing security clearance request.',
    });
  }
});

// Query recorded leads (for testing & verification)
router.get('/leads', async (_req: Request, res: Response) => {
  const dbStatus = getDBStatus();
  try {
    if (dbStatus.connected) {
      const leads = await LeadModel.find().sort({ createdAt: -1 }).limit(50);
      return res.json({
        success: true,
        source: 'mongodb',
        count: leads.length,
        leads,
      });
    } else {
      return res.json({
        success: true,
        source: 'in-memory-buffer',
        count: inMemoryLeads.length,
        leads: inMemoryLeads,
      });
    }
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;
