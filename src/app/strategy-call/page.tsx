'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Code2, Users, Zap, ShieldCheck, Headphones } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/zonetai/30min';

const features = [
  { icon: Code2, label: 'Full-stack web, mobile & AI development' },
  { icon: Users, label: 'Dedicated team assigned within 48 hours' },
  { icon: Zap, label: 'MVP delivered in 7–30 days' },
  { icon: ShieldCheck, label: 'Transparent pricing, no hidden costs' },
  { icon: Headphones, label: 'Post-launch support included' },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Industries Served' },
  { value: '99%', label: 'Client Satisfaction' },
];

const CubeIllustration = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="cubeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD580" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="faceTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE08A" />
        <stop offset="100%" stopColor="#F5C842" />
      </linearGradient>
      <linearGradient id="faceLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5A623" />
        <stop offset="100%" stopColor="#D4841A" />
      </linearGradient>
      <linearGradient id="faceRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E89020" />
        <stop offset="100%" stopColor="#C07018" />
      </linearGradient>
      <filter id="cubeShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#F5A623" floodOpacity="0.35" />
      </filter>
    </defs>
    <ellipse cx="45" cy="45" rx="38" ry="38" fill="url(#cubeGlow)" />
    <circle cx="15" cy="20" r="2.5" fill="#FFD580" opacity="0.8" />
    <circle cx="72" cy="18" r="1.8" fill="#FFD580" opacity="0.6" />
    <circle cx="78" cy="55" r="1.4" fill="#F5A623" opacity="0.7" />
    <circle cx="10" cy="62" r="1.6" fill="#FFD580" opacity="0.5" />
    <g filter="url(#cubeShadow)">
      <polygon points="45,14 68,27 45,40 22,27" fill="url(#faceTop)" stroke="#E8C050" strokeWidth="0.5" />
      <polygon points="22,27 45,40 45,66 22,53" fill="url(#faceLeft)" stroke="#C8880A" strokeWidth="0.5" />
      <polygon points="45,40 68,27 68,53 45,66" fill="url(#faceRight)" stroke="#B07010" strokeWidth="0.5" />
    </g>
    <g transform="translate(45,27) rotate(-30)">
      <text x="-7" y="5" fontFamily="sans-serif" fontWeight="800" fontSize="12" fill="#C07818" opacity="0.9">Z</text>
    </g>
    <g transform="translate(72,15)">
      <path d="M0,-5 L1.5,-1.5 L5,0 L1.5,1.5 L0,5 L-1.5,1.5 L-5,0 L-1.5,-1.5 Z" fill="#FFD580" opacity="0.9" />
    </g>
  </svg>
);


export default function StrategyCallPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    project: '',
    source: '',
    timeline: '',
    budget: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        full_name: form.name,
        company_name: form.company,
        work_email: form.email,
        website_url: form.website,
        project_details: form.project,
        source: form.source,
        timeline: form.timeline,
        budget_range: form.budget,
      };

      const response = await fetch('https://team.flipshope.com/api/zonet/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      setSuccess(true);
      setForm({
        name: '',
        company: '',
        email: '',
        website: '',
        project: '',
        source: '',
        timeline: '',
        budget: '',
      });

      const params = new URLSearchParams();
      if (form.name) params.set('name', form.name);
      setTimeout(() => {
        router.push(`${CALENDLY_URL}?${params.toString()}`);
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
      setLoading(false);
    }
  }

  const inputBase =
    'w-full pl-10 pr-3.5 py-[11px] text-sm text-[#1A1A1A] bg-[#FAFAF8] border border-[#E5E1DA] rounded-lg outline-none transition-all duration-200 placeholder:text-[#BBBBBB] focus:border-[#E8A020] focus:shadow-[0_0_0_3px_rgba(232,160,32,0.18)] focus:bg-white';

  const selectBase =
    'w-full px-3.5 pr-10 py-[11px] text-sm text-[#888888] bg-[#FAFAF8] border border-[#E5E1DA] rounded-lg outline-none appearance-none cursor-pointer transition-all duration-200 focus:border-[#E8A020] focus:shadow-[0_0_0_3px_rgba(232,160,32,0.18)] focus:bg-white';

  return (
    <section className="min-h-screen bg-[#F7F4EE] flex items-center">
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-[72px] py-12 flex flex-col lg:flex-row gap-8 items-center">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-none w-full lg:w-[480px] flex flex-col">

          {/* Logo */}
          <div className="mb-9">
            <Image src="/images/zonet/logo-black.png" alt="ZonetTech" width={140} height={35} className="h-7 w-auto" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-[7px] bg-[#FEF3DC] border border-[#F5C87040] text-[#E8A020] text-[11.5px] font-bold tracking-[0.08em] px-[14px] py-[6px] rounded-full mb-5 w-fit">
            <span className="w-[7px] h-[7px] bg-[#E8A020] rounded-full shrink-0" />
            FREE STRATEGY CALL
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[52px] font-normal leading-[1.10] tracking-[-0.5px] text-[#1A1A1A] mb-[18px]">
            See what ZonetTech<br />
            can build for you<br />
            <em className="text-[#E8A020] not-italic font-serif">in 30 days.</em>
          </h1>

          {/* Subtext */}
          <p className="text-[15px] text-[#4A4A4A] leading-[1.6] mb-7">
            No long-term lock-ins. Fast, high-quality digital products<br className="hidden sm:block" />
            engineered for growth.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-1 mb-9">
            {features.map(f => (
              <li
                key={f.label}
                className="flex items-center gap-3 px-[14px] py-[10px] bg-white/60 border border-[#E5E1DA]/80 rounded-lg text-[14.5px] text-[#1A1A1A]"
              >
                <span className="flex items-center justify-center w-8 h-8 shrink-0"><f.icon size={18} color="#E8A020" /></span>
                {f.label}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex gap-16 mb-7 pb-7 border-b border-[#E5E1DA]">
            {stats.map(s => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-serif text-[38px] font-bold leading-none tracking-[-0.5px] text-[#E8A020]">
                  {s.value}
                </span>
                <span className="text-[12.5px] text-[#888888] font-semibold">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-3.5">
            <div className="flex items-center">
              {/* Avatar 1 */}
              <div className="w-9 h-9 rounded-full border-[2.5px] border-[#F7F4EE] overflow-hidden -mr-2.5 z-[4]">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                  <circle cx="18" cy="18" r="18" fill="#C8B89A" />
                  <circle cx="18" cy="14" r="6" fill="#8B6E52" />
                  <ellipse cx="18" cy="30" rx="11" ry="8" fill="#8B6E52" />
                </svg>
              </div>
              {/* Avatar 2 */}
              <div className="w-9 h-9 rounded-full border-[2.5px] border-[#F7F4EE] overflow-hidden -mr-2.5 z-[3]">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                  <circle cx="18" cy="18" r="18" fill="#B8C8D8" />
                  <circle cx="18" cy="14" r="6" fill="#6B8BA4" />
                  <ellipse cx="18" cy="30" rx="11" ry="8" fill="#6B8BA4" />
                </svg>
              </div>
              {/* Avatar 3 */}
              <div className="w-9 h-9 rounded-full border-[2.5px] border-[#F7F4EE] overflow-hidden -mr-2.5 z-[2]">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                  <circle cx="18" cy="18" r="18" fill="#D4C4A8" />
                  <circle cx="18" cy="14" r="6" fill="#7A6048" />
                  <ellipse cx="18" cy="30" rx="11" ry="8" fill="#7A6048" />
                </svg>
              </div>
              {/* +more */}
              <div className="w-9 h-9 rounded-full border-[2.5px] border-[#F7F4EE] bg-[#E8A020] flex items-center justify-center text-white text-[13px] font-bold z-[1]">
                +
              </div>
            </div>
            <div className="text-[13.5px] text-[#4A4A4A] leading-[1.5]">
              <strong className="text-[#1A1A1A] font-semibold">Trusted by founders &amp; teams</strong><br />
              building the future.
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN (Form Card) ── */}
        <div className="flex-1 w-full flex items-stretch">
          <div className="w-full bg-white rounded-[20px] shadow-[0_8px_48px_rgba(0,0,0,0.10),0_2px_12px_rgba(0,0,0,0.06)] border border-[#E5E1DA]/50 px-10 pt-10 pb-8">

            {/* Card header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <h2 className="font-serif text-[32px] font-normal leading-[1.15] tracking-[-0.3px] text-[#1A1A1A] mb-1.5">
                  Tell us about your project
                </h2>
                <p className="text-sm text-[#4A4A4A]">
                  We&apos;ll get back to you within <span className="text-[#E8A020] font-medium">24 hours.</span>
                </p>
              </div>
              <div className="shrink-0 -mt-2 -mr-1 hidden sm:block">
                <CubeIllustration />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-3.5 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700">✓ Your information has been submitted. Redirecting to book your call...</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                    Your Name <span className="text-[#E8A020]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="5.5" r="3" stroke="#BBBBBB" strokeWidth="1.4" />
                        <path d="M2 14 C2 10.5 4.5 8.5 8 8.5 C11.5 8.5 14 10.5 14 14" stroke="#BBBBBB" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputBase} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                    Company Name <span className="text-[#E8A020]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="4" width="12" height="10" rx="1" stroke="#BBBBBB" strokeWidth="1.4" />
                        <path d="M5 4 V2.5 Q5 1.5 6 1.5 H10 Q11 1.5 11 2.5 V4" stroke="#BBBBBB" strokeWidth="1.4" />
                        <path d="M6 8 H10 M6 11 H10" stroke="#BBBBBB" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Inc." className={inputBase} />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                    Work Email <span className="text-[#E8A020]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#BBBBBB" strokeWidth="1.4" />
                        <path d="M1.5 5.5 L8 9 L14.5 5.5" stroke="#BBBBBB" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="name@company.com" className={inputBase} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                    Website
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="#BBBBBB" strokeWidth="1.4" />
                        <path d="M2.5 8 Q5 5 8 8 Q11 11 13.5 8" stroke="#BBBBBB" strokeWidth="1.3" />
                        <path d="M8 2 Q10 5 10 8 Q10 11 8 14" stroke="#BBBBBB" strokeWidth="1.3" />
                      </svg>
                    </span>
                    <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://yoursite.com" className={inputBase} />
                  </div>
                </div>
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                  Tell us about your project <span className="text-[#E8A020]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 pointer-events-none flex items-start">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 3.5 L3 12.5 M3 3.5 L13 3.5 M3 8 L10 8" stroke="#BBBBBB" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M11 11 L13.5 13.5 M11 13.5 L13.5 11" stroke="#BBBBBB" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </span>
                  <textarea
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    required
                    placeholder="What are you building and what help do you need?"
                    className={`${inputBase} resize-y min-h-[100px] pt-3 leading-[1.5]`}
                  />
                </div>
              </div>

              {/* Row 3 — selects */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                    How did you find us? <span className="text-[#E8A020]">*</span>
                  </label>
                  <div className="relative">
                    <select name="source" value={form.source} onChange={handleChange} required className={selectBase}>
                      <option value="" disabled>Select an option</option>
                      <option>Google Search</option>
                      <option>LinkedIn</option>
                      <option>Instagram</option>
                      <option>Twitter / X</option>
                      <option>Facebook</option>
                      <option>YouTube</option>
                      <option>Friend or Colleague Referral</option>
                      <option>Client Referral</option>
                      <option>Clutch / Agency Directory</option>
                      <option>Upwork / Freelance Platform</option>
                      <option>Blog / Article</option>
                      <option>Podcast</option>
                      <option>Newsletter</option>
                      <option>Event / Conference</option>
                      <option>Other</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5 L7 9 L11 5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                    Project Timeline
                  </label>
                  <div className="relative">
                    <select name="timeline" value={form.timeline} onChange={handleChange} className={selectBase}>
                      <option value="" disabled>Select timeline</option>
                      <option>7–14 days</option>
                      <option>15–30 days</option>
                      <option>1–3 months</option>
                      <option>3+ months</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5 L7 9 L11 5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                  Budget Range
                </label>
                <div className="relative">
                  <select name="budget" value={form.budget} onChange={handleChange} className={selectBase}>
                    <option value="" disabled>Select your budget range</option>
                    <option>Under ₹10,000</option>
                    <option>₹10,000 – ₹50,000</option>
                    <option>₹50,000 – ₹2,00,000</option>
                    <option>₹2,00,000+</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5 L7 9 L11 5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-gradient-to-br from-[#F5C030] via-[#E8A020] to-[#D48818] text-white text-base font-semibold rounded-xl shadow-[0_4px_24px_rgba(232,160,32,0.45)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,160,32,0.55)] hover:brightness-105 active:translate-y-0 transition-all duration-200 disabled:opacity-60 tracking-[0.01em]"
              >
                {loading ? 'Redirecting…' : 'Book My Strategy Call'}
                {!loading && (
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10 H16 M11 5 L16 10 L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </button>

              {/* Security note */}
              <div className="flex items-center justify-center gap-1.5 text-[12.5px] text-[#888888] mt-1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <path d="M6.5 1 L11.5 3 V7.5 C11.5 10.5 9 12.5 6.5 13.5 C4 12.5 1.5 10.5 1.5 7.5 V3 Z" stroke="#AAAAAA" strokeWidth="1.2" fill="none" />
                  <rect x="4.5" y="7" width="4" height="3.5" rx="0.7" stroke="#AAAAAA" strokeWidth="1.1" />
                  <path d="M5 7 V5.5 Q5 4 6.5 4 Q8 4 8 5.5 V7" stroke="#AAAAAA" strokeWidth="1.1" />
                </svg>
                Your information is secure and never shared.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
