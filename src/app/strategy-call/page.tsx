'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/zonetai/30min';

const benefits = [
  'Full-stack web, mobile & AI development',
  'Dedicated team assigned within 48 hours',
  'MVP delivered in 7–30 days',
  'Transparent pricing, no hidden costs',
  'Post-launch support included',
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Industries Served' },
  { value: '99%', label: 'Client Satisfaction' },
];

export default function StrategyCallPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    website: '',
    project: '',
    source: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const params = new URLSearchParams();
    if (form.name) params.set('name', form.name);
    router.push(`${CALENDLY_URL}?${params.toString()}`);
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-[#E6E4DF] text-sm text-[#1A1A1A] placeholder:text-[#686B6B]/50 focus:outline-none focus:border-[#1A1A1A] transition-colors bg-[#F7F6F3]';

  return (
    <section className="bg-[#F7F6F3] min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Brand + Trust */}
          <div className="lg:sticky lg:top-32">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/zonet/logo-black.png"
                alt="ZonetTech"
                width={140}
                height={35}
                className="h-7 w-auto"
              />
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] font-heading leading-tight mb-4">
              See what ZonetTech<br />can build for you<br />in 30 days.
            </h1>
            <p className="text-sm text-[#686B6B] leading-relaxed mb-8 max-w-sm">
              No long-term lock-ins. Fast, high-quality digital products engineered for growth.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {benefits.map(b => (
                <li key={b} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                  <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full bg-[#E8C547] flex items-center justify-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex gap-8 pt-4 border-t border-[#E6E4DF]">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-[#1A1A1A] font-heading">{s.value}</p>
                  <p className="text-xs text-[#686B6B] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl p-8 border border-[#E6E4DF] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#E8C547]" />
              <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
                Free Strategy Call
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#1A1A1A] font-heading mb-6">
              Tell us about your project
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  Name <span className="text-[#E8C547]">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  Company Name <span className="text-[#E8C547]">*</span>
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="Acme Inc."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  Website <span className="text-[#E8C547]">*</span>
                </label>
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  required
                  type="url"
                  placeholder="https://yoursite.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  Tell us about your project <span className="text-[#E8C547]">*</span>
                </label>
                <textarea
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What are you building and what help do you need?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  How did you find us? <span className="text-[#E8C547]">*</span>
                </label>
                <select
                  name="source"
                  value={form.source}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="google">Google</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter / X</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full flex items-center justify-center gap-2 h-12 bg-[#1A1A1A] text-white font-bold text-sm rounded-full hover:bg-[#2A2A2A] hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-60"
              >
                {loading ? 'Redirecting to calendar…' : <>Book My Strategy Call <ArrowRight size={16} /></>}
              </button>

              <p className="text-center text-xs text-[#686B6B]">
                You&apos;ll be redirected to pick a time that works for you.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
