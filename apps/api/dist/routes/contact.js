"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const Lead_1 = require("../models/Lead");
const db_1 = require("../config/db");
const router = (0, express_1.Router)();
// In-memory fallback buffer in case MongoDB isn't reachable in local dev
const inMemoryLeads = [];
// Validation schema for agency inquiries
const ContactSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(2, 'Full name is required (min 2 characters)'),
    agency: zod_1.z.string().min(2, 'Law enforcement agency / institution name is required'),
    role: zod_1.z.string().min(2, 'Official role or rank is required'),
    officialEmail: zod_1.z.string().email('Please enter a valid official institutional email address'),
    investigationScope: zod_1.z.string().min(2, 'Please select or state your investigation scope'),
    message: zod_1.z.string().optional().default(''),
});
router.post('/contact', async (req, res) => {
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
        const dbStatus = (0, db_1.getDBStatus)();
        let savedRecord = null;
        let storageMethod = 'in-memory-resilient-store';
        if (dbStatus.connected) {
            try {
                const lead = new Lead_1.LeadModel(leadData);
                savedRecord = await lead.save();
                storageMethod = 'mongodb';
            }
            catch (dbErr) {
                console.error('[DB WRITE ERROR] Fallback to in-memory store:', dbErr.message);
                inMemoryLeads.unshift(leadData);
                savedRecord = leadData;
            }
        }
        else {
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
    }
    catch (err) {
        console.error('[API ERROR] /api/contact:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error processing security clearance request.',
        });
    }
});
// Query recorded leads (for testing & verification)
router.get('/leads', async (_req, res) => {
    const dbStatus = (0, db_1.getDBStatus)();
    try {
        if (dbStatus.connected) {
            const leads = await Lead_1.LeadModel.find().sort({ createdAt: -1 }).limit(50);
            return res.json({
                success: true,
                source: 'mongodb',
                count: leads.length,
                leads,
            });
        }
        else {
            return res.json({
                success: true,
                source: 'in-memory-buffer',
                count: inMemoryLeads.length,
                leads: inMemoryLeads,
            });
        }
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});
exports.default = router;
