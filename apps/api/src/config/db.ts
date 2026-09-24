import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async (): Promise<boolean> => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sentinel_x_db';

  try {
    // Attempt with short timeout so server startup isn't blocked if Mongo is offline
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(`[DATABASE] MongoDB Connected successfully to: ${mongoUri}`);
    return true;
  } catch (error: any) {
    console.warn(`[DATABASE WARNING] MongoDB connection failed (${error.message}). Running in resilient mode (saving leads to memory buffer and local log).`);
    isConnected = false;
    return false;
  }
};

export const getDBStatus = () => ({
  connected: isConnected,
  readyState: mongoose.connection.readyState,
});
