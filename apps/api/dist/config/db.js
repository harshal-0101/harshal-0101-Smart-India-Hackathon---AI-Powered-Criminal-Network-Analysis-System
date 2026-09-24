"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDBStatus = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let isConnected = false;
const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sentinel_x_db';
    try {
        // Attempt with short timeout so server startup isn't blocked if Mongo is offline
        await mongoose_1.default.connect(mongoUri, {
            serverSelectionTimeoutMS: 3000,
        });
        isConnected = true;
        console.log(`[DATABASE] MongoDB Connected successfully to: ${mongoUri}`);
        return true;
    }
    catch (error) {
        console.warn(`[DATABASE WARNING] MongoDB connection failed (${error.message}). Running in resilient mode (saving leads to memory buffer and local log).`);
        isConnected = false;
        return false;
    }
};
exports.connectDB = connectDB;
const getDBStatus = () => ({
    connected: isConnected,
    readyState: mongoose_1.default.connection.readyState,
});
exports.getDBStatus = getDBStatus;
