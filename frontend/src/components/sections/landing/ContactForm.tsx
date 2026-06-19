'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, CheckCircle2, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SectionBadge } from '@/components/ui';

const budgets = [
  'Under ₹10,000', '₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000+'
];

const timelines = [
  '7–14 days', '15–30 days', '1–3 months', '3+ months'
];

const contacts = [
  { icon: Mail, label: 'Email Us At', value: 'business@zonettech.com' },
  { icon: Phone, label: 'Call Us', value: '+91 7023122071' },
  { icon: MapPin, label: 'Our HQ', value: 'Jaipur Rajasthan, India' },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '₹10,000 – ₹50,000',
    timeline: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        full_name: formData.name,
        company_name: '',
        work_email: formData.email,
        website_url: '',
        project_details: formData.message,
        source: '',
        timeline: formData.timeline,
        budget_range: formData.budget,
      };

      const response = await fetch('https://team.flipshope.com/api/zonet/contactus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      setSubmitted(true);
      setFormData({ name: '', email: '', budget: '₹10,000 – ₹50,000', timeline: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#F7F6F3] border-t border-[#E6E4DF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">

          {/* ── LEFT: Cream Panel ── */}
          <div className="bg-[#F7F6F3] px-8 py-16 md:px-12 md:py-20 flex flex-col justify-between gap-12 border-b lg:border-b-0 lg:border-r border-[#E6E4DF]">
            <div>
              <SectionBadge variant="dot" className="mb-8">Get in Touch</SectionBadge>

              <h2 className="font-sora text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-[1.08] tracking-tight mb-5">
                Let&apos;s build <br />
                something <br />
                <span className="text-[#E8C547]">great.</span>
              </h2>

              <p className="font-sans text-sm text-[#686B6B] leading-relaxed max-w-xs">
                Share your idea and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Items */}
            <div className="flex flex-col gap-1">
              {contacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="group flex items-center gap-4 py-4 border-t border-[#E6E4DF] cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E4DF] group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] flex items-center justify-center shrink-0 transition-all duration-300">
                    <Icon size={16} className="text-[#1A1A1A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-sans text-[9px] font-black text-[#686B6B] uppercase tracking-[0.18em]">{label}</span>
                    <span className="font-sans text-[13px] font-semibold text-[#1A1A1A] truncate">{value}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-[#686B6B] group-hover:text-[#1A1A1A] ml-auto shrink-0 transition-colors duration-300" />
                </div>
              ))}
              <div className="border-t border-[#E6E4DF]" />
            </div>

            {/* Decorative dot grid */}
            <div
              className="hidden lg:block absolute bottom-0 left-0 w-48 h-48 opacity-30 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #E6E4DF 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="bg-white px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center gap-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[#E8C547]/10 flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-[#E8C547]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sora text-2xl font-bold text-[#1A1A1A]">Message Received!</h3>
                    <p className="font-sans text-sm text-[#686B6B]">Our team will get back to you within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-sans text-[#1A1A1A] font-black text-[10px] uppercase tracking-widest hover:underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="font-sans text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  {/* 01 — Name & Email */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[10px] font-black text-[#E8C547] tracking-[0.15em]">01</span>
                      <span className="font-sans text-[10px] font-black text-[#686B6B] tracking-[0.15em] uppercase">Tell us about your project</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="font-sans w-full bg-[#F7F6F3] border border-[#E6E4DF] rounded-xl px-4 py-3.5 outline-none focus:border-[#1A1A1A] transition-all text-[#1A1A1A] text-sm placeholder:text-[#686B6B]/50"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="font-sans w-full bg-[#F7F6F3] border border-[#E6E4DF] rounded-xl px-4 py-3.5 outline-none focus:border-[#1A1A1A] transition-all text-[#1A1A1A] text-sm placeholder:text-[#686B6B]/50"
                      />
                    </div>
                  </div>

                  {/* 02 — Budget */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[10px] font-black text-[#E8C547] tracking-[0.15em]">02</span>
                      <span className="font-sans text-[10px] font-black text-[#686B6B] tracking-[0.15em] uppercase">Estimate Budget</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`font-sans px-4 py-2 rounded-full text-[11px] font-semibold transition-all duration-200 border ${
                            formData.budget === b
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                              : 'bg-white text-[#686B6B] border-[#E6E4DF] hover:border-[#1A1A1A]/40'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 03 — Timeline */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[10px] font-black text-[#E8C547] tracking-[0.15em]">03</span>
                      <span className="font-sans text-[10px] font-black text-[#686B6B] tracking-[0.15em] uppercase">Project Timeline</span>
                    </div>
                    <div className="relative">
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className={`font-sans w-full bg-[#F7F6F3] border border-[#E6E4DF] rounded-xl px-4 py-3.5 outline-none focus:border-[#1A1A1A] transition-all text-sm appearance-none cursor-pointer ${
                          formData.timeline === '' ? 'text-[#686B6B]/50' : 'text-[#1A1A1A]'
                        }`}
                      >
                        <option value="" disabled hidden>Select Timeline</option>
                        {timelines.map(t => <option key={t} value={t} className="text-[#1A1A1A]">{t}</option>)}
                      </select>
                      <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#686B6B] pointer-events-none" />
                    </div>
                  </div>

                  {/* 04 — Message */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[10px] font-black text-[#E8C547] tracking-[0.15em]">04</span>
                      <span className="font-sans text-[10px] font-black text-[#686B6B] tracking-[0.15em] uppercase">Project Details</span>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="font-sans w-full bg-[#F7F6F3] border border-[#E6E4DF] rounded-xl px-4 py-4 outline-none focus:border-[#1A1A1A] transition-all text-[#1A1A1A] text-sm resize-none placeholder:text-[#686B6B]/50"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-sans w-full bg-[#1A1A1A] text-white rounded-xl py-4 font-bold text-[11px] uppercase tracking-[0.18em] hover:bg-black transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Kickstart Your Project'}
                    {!loading && <ArrowUpRight size={16} className="text-[#E8C547] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
