import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  fullName: string;
  agency: string;
  role: string;
  officialEmail: string;
  investigationScope: string;
  message?: string;
  status: 'PENDING' | 'VERIFIED' | 'CONTACTED';
  ipAddress?: string;
  createdAt: Date;
}

const LeadSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    agency: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    officialEmail: { type: String, required: true, trim: true, lowercase: true },
    investigationScope: { type: String, required: true, trim: true },
    message: { type: String, default: '' },
    status: {
      type: String,
      enum: ['PENDING', 'VERIFIED', 'CONTACTED'],
      default: 'PENDING',
    },
    ipAddress: { type: String, default: '127.0.0.1' },
  },
  {
    timestamps: true,
  }
);

export const LeadModel = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
