import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import { connectDB, getDBStatus } from './config/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Middleware
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check & Telemetry
app.get('/api/health', (_req: Request, res: Response) => {
  const dbStatus = getDBStatus();
  res.json({
    status: 'OPERATIONAL',
    system: 'SENTINEL-X Intelligence Core API',
    uptimeSeconds: Math.floor(process.uptime()),
    database: {
      connected: dbStatus.connected,
      state: dbStatus.readyState === 1 ? 'CONNECTED' : 'DISCONNECTED / BUFFER_MODE',
    },
    version: '1.0.4-NCRB-SPEC',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api', contactRoutes);

// 404 Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    error: 'NOT_FOUND',
    message: 'Endpoint does not exist on SENTINEL-X REST API layer.',
  });
});

// Connect to MongoDB and start listening
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`[SENTINEL-X API] REST Server active on port ${PORT}`);
    console.log(`[HEALTH] http://localhost:${PORT}/api/health`);
    console.log(`[CONTACT ENDPOINT] http://localhost:${PORT}/api/contact`);
    console.log(`====================================================`);
  });
};

startServer().catch((err) => {
  console.error('[FATAL SERVER ERROR]', err);
});
