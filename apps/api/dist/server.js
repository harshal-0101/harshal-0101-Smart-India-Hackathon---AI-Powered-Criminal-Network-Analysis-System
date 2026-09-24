"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const contact_1 = __importDefault(require("./routes/contact"));
const db_1 = require("./config/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Security & Middleware
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Health Check & Telemetry
app.get('/api/health', (_req, res) => {
    const dbStatus = (0, db_1.getDBStatus)();
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
app.use('/api', contact_1.default);
// 404 Handler
app.use((_req, res) => {
    res.status(404).json({
        error: 'NOT_FOUND',
        message: 'Endpoint does not exist on SENTINEL-X REST API layer.',
    });
});
// Connect to MongoDB and start listening
const startServer = async () => {
    await (0, db_1.connectDB)();
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
