'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

type Category = 'All' | 'AI' | 'Web' | 'Mobile' | 'Design' | 'Guide';

interface Resource {
  title: string;
  description: string;
  category: Exclude<Category, 'All'>;
  readTime: string;
  href: string;
}

const resources: Resource[] = [
  {
    title: 'How to Build an AI-Powered SaaS MVP in 30 Days',
    description:
      'A step-by-step breakdown of the exact process we use to take a product from whiteboard to live — including the AI tools, workflows, and team structure that make it possible.',
    category: 'AI',
    readTime: '8 min read',
    href: '#',
  },
  {
    title: 'The Best Tech Stack for Fast-Moving Startups in 2026',
    description:
      "We've shipped 50+ products and we keep coming back to the same stack. Here's why Next.js, Supabase, and a few key AI APIs consistently win for early-stage teams.",
    category: 'Web',
    readTime: '6 min read',
    href: '#',
  },
  {
    title: 'Prompt Engineering for Product Teams',
    description:
      'Most teams use AI as a search engine. The ones shipping 10x faster use it as a co-pilot. This guide covers the prompting patterns that actually change how fast you can build.',
    category: 'AI',
    readTime: '5 min read',
    href: '#',
  },
  {
    title: 'Mobile-First Design Principles for B2B Products',
    description:
      "B2B doesn't mean desktop-only. We break down the design decisions that make enterprise-grade mobile apps feel polished — without a full design team.",
    category: 'Design',
    readTime: '7 min read',
    href: '#',
  },
  {
    title: 'How We Automated Client Onboarding with AI',
    description:
      "Manual onboarding was costing our clients 3–5 hours per new user. We built an AI-driven onboarding flow that cut that to under 20 minutes. Here's the exact architecture.",
    category: 'AI',
    readTime: '6 min read',
    href: '#',
  },
  {
    title: "Web Performance Optimization: A Developer's Checklist",
    description:
      'Core Web Vitals matter more than ever. This is the checklist we run on every production deployment — from image optimization to edge caching and bundle splitting.',
    category: 'Web',
    readTime: '9 min read',
    href: '#',
  },
  {
    title: 'From Idea to App Store in 30 Days: Our Process',
    description:
      'Getting an app live in a month sounds impossible until you see the process. We walk through sprint structure, design handoffs, and the review submission steps that always catch teams off guard.',
    category: 'Mobile',
    readTime: '10 min read',
    href: '#',
  },
  {
    title: 'Building Scalable APIs: Our Engineering Approach',
    description:
      'Most MVPs break the moment they get real traffic. We share the API design patterns — rate limiting, pagination, versioning — that keep things stable from day one.',
    category: 'Web',
    readTime: '8 min read',
    href: '#',
  },
  {
    title: 'UI Patterns That Convert: A SaaS Design Guide',
    description:
      'The difference between a product people love and one they churn from is often 3–4 UI decisions. We document the patterns we use across every product we ship.',
    category: 'Design',
    readTime: '7 min read',
    href: '#',
  },
  {
    title: "The Founder's Guide to Scoping a Digital Product",
    description:
      'Most projects fail in scope, not execution. This guide helps non-technical founders write a brief that gets accurate estimates, avoids scope creep, and keeps the team aligned.',
    category: 'Guide',
    readTime: '12 min read',
    href: '#',
  },
];

const categories: Category[] = ['All', 'AI', 'Web', 'Mobile', 'Design', 'Guide'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  AI: 'bg-[#E8C547]/20 text-[#8a7200]',
  Web: 'bg-blue-50 text-blue-700',
  Mobile: 'bg-purple-50 text-purple-700',
  Design: 'bg-pink-50 text-pink-700',
  Guide: 'bg-green-50 text-green-700',
};

export default function ResourcesPage() {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All' ? resources : resources.filter(r => r.category === active);

  return (
    <main className="bg-[#F7F6F3] min-h-screen">

      {/* Hero */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8C547]" />
            <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
              Free Resources
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] font-heading leading-tight mb-6">
            Insights to help you<br />build better products.
          </h1>
          <p className="text-sm text-[#686B6B] leading-relaxed max-w-xl mx-auto">
            Practical guides, engineering patterns, and design principles from the ZonetTech team —
            built from shipping 50+ products across web, mobile, and AI.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-white text-[#686B6B] border border-[#E6E4DF] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-px bg-[#E6E4DF] rounded-2xl overflow-hidden border border-[#E6E4DF]">
            {filtered.map((resource, i) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                className="bg-white group"
              >
                <Link
                  href={resource.href}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-6 hover:bg-[#F7F6F3] transition-colors duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryColors[resource.category]}`}
                      >
                        {resource.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#686B6B]">
                        <Clock size={11} />
                        {resource.readTime}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-[#1A1A1A] leading-snug mb-1.5 group-hover:text-[#686B6B] transition-colors">
                      {resource.title}
                    </h2>
                    <p className="text-sm text-[#686B6B] leading-relaxed line-clamp-2">
                      {resource.description}
                    </p>
                  </div>
                  <div className="shrink-0 self-center">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E6E4DF] group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] transition-all duration-200">
                      <ArrowRight
                        size={15}
                        className="text-[#686B6B] group-hover:text-white transition-colors duration-200 -rotate-45"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-sm text-[#686B6B] py-16">
              No resources in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#E6E4DF] bg-white px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] font-heading mb-4">
            Ready to build something great?
          </h2>
          <p className="text-sm text-[#686B6B] mb-8 leading-relaxed">
            Talk to our team about your project. We'll help you scope it, plan it, and ship it fast.
          </p>
          <Link
            href="/strategy-call"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white font-bold text-sm rounded-full hover:bg-[#2A2A2A] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Book a Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
