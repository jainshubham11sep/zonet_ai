import { type Document, Schema, model } from 'mongoose';
import type { AuditCheck, SectionKey, SectionResult } from '../types/audit';

export type AuditStatus = 'pending' | 'running' | 'complete' | 'failed';

export interface IAudit extends Document {
  url: string;
  status: AuditStatus;
  quick: AuditCheck[];
  sections: Partial<Record<SectionKey, SectionResult>>;
  leadEmail: string | null;
  leadName: string | null;
  unlocked: boolean;
  unlockToken: string | null;
  unlockTokenExpiry: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const AuditSchema = new Schema<IAudit>(
  {
    url: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['pending', 'running', 'complete', 'failed'],
      default: 'pending',
    },
    quick: { type: [Schema.Types.Mixed], default: [] },
    sections: { type: Schema.Types.Mixed, default: {} },
    leadEmail: { type: String, default: null },
    leadName: { type: String, default: null },
    unlocked: { type: Boolean, default: false },
    unlockToken: { type: String, default: null },
    unlockTokenExpiry: { type: Date, default: null },
  },
  { timestamps: true }
);

AuditSchema.index({ url: 1, createdAt: -1 });

export const AuditModel = model<IAudit>('Audit', AuditSchema);
