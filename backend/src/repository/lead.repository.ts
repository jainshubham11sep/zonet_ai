import { type ILead, LeadModel } from '../models/lead.model';

export async function upsertLead(input: {
  auditId: string;
  url: string;
  email: string;
  name: string | null;
}): Promise<ILead> {
  return LeadModel.findOneAndUpdate(
    { auditId: input.auditId, email: input.email.toLowerCase() },
    { $set: { url: input.url, name: input.name }, $setOnInsert: { verified: false } },
    { new: true, upsert: true }
  ).lean<ILead>() as Promise<ILead>;
}

export async function markLeadVerified(auditId: string, email: string): Promise<void> {
  await LeadModel.updateOne({ auditId, email: email.toLowerCase() }, { $set: { verified: true } });
}
