import { Document, model, Schema } from 'mongoose';

export type AuditStatus = 'pending' | 'running' | 'complete' | 'failed';

export interface IAudit extends Document {
  url: string;
  status: AuditStatus;
  overallScore: number | null;
  issueCount: number;
  report: Record<string, unknown> | null;
  leadEmail: string | null;
  leadName: string | null;
  unlocked: boolean;
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
    overallScore: { type: Number, default: null },
    issueCount: { type: Number, default: 0 },
    report: { type: Schema.Types.Mixed, default: null },
    leadEmail: { type: String, default: null },
    leadName: { type: String, default: null },
    unlocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

AuditSchema.index({ url: 1, createdAt: -1 });

export const AuditModel = model<IAudit>('Audit', AuditSchema);
