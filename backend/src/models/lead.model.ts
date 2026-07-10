import { type Document, Schema, model } from 'mongoose';

export interface ILead extends Document {
  auditId: string;
  url: string;
  email: string;
  name: string | null;
  verified: boolean;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    auditId: { type: String, required: true },
    url: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    name: { type: String, default: null },
    verified: { type: Boolean, default: false },
    source: { type: String, default: 'audit-tool' },
  },
  { timestamps: true }
);

LeadSchema.index({ email: 1, auditId: 1 }, { unique: true });

export const LeadModel = model<ILead>('Lead', LeadSchema);
