'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Cpu, Zap, Globe, Smartphone, Puzzle } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const projects = {
  'flipshope': { 
    title: 'Flipshope: AI Shopping Assistant', 
    problem: 'Shoppers struggle with volatile prices and manual coupon hunting, often missing the best deals across major e-commerce platforms like Amazon and Flipkart.', 
    solution: 'We engineered an AI-powered browser extension and mobile app that automates price tracking, provides AI "Buy vs Wait" scores, and applies the best coupons instantly.',
    tech: ['AI Aggregation', 'Browser Extension API', 'Next.js', 'Node.js'],
    results: ['1.5M+ Active Users', 'Tracks 20 Crore Products', '4.5/5 Star User Rating'],
    img: '/images/zonet/flipshope-1.png',
    platformFeatures: {
      Web: ['Real-time Deals Aggregator', 'Price Drop Alerts', 'User Dashboard'],
      App: ['Push Notifications', 'Smooth In-App Purchase UI', 'Wishlist Sync'],
      Extension: ['1-Click Auto Coupon Apply', 'Live Price Graph on Amazon/Flipkart', 'Flash Sale Auto-Buy']
    }
  },
  'hyyzo': { 
    title: 'Hyyzo: Next-Gen Rewards Platform', 
    problem: 'Users lacked a high-paying, reliable cashback system that rewarded them not just for shopping, but for sharing deals with their community.', 
    solution: 'We developed India\'s highest paying cashback platform featuring "Profit Links"—an automated affiliate link generator that enables users to earn from every shared purchase.',
    tech: ['Affiliate API Engine', 'React Native', 'Next.js', 'Real-time Analytics'],
    results: ['1 Lakh+ Active Earners', '200+ Partner Stores', '4.4★ Mobile App Rating'],
    img: '/images/zonet/hyyzo-1.png',
    platformFeatures: {
      Web: ['Profit Link Generator', 'Cashback Tracking Dashboard', 'Payout Management'],
      App: ['On-the-go Link Sharing', 'Instant Cash Alerts', 'Referral Network Tracking'],
      Extension: ['Activate Cashback Prompt', 'Supported Store Highlighter', 'Quick Link Copy']
    }
  },
  'teacherdekho': { 
    title: 'TeacherDekho: Verified Mentor Network', 
    problem: 'Quality education is often inaccessible due to a lack of verified, affordable mentors and personalized learning tools.', 
    solution: 'We architected a secure, marketplace-style platform connecting 50k+ students with over 2,000 verified teachers, complete with trial systems and progress analytics.',
    tech: ['Verification Engine', 'WebRTC', 'Next.js', 'PostgreSQL'],
    results: ['50k+ Student Enrolled', '2,000+ Verified Teachers', '4.8★ Learning Rating'],
    img: '/images/zonet/teacherdekho-1.png',
    platformFeatures: {
      Web: ['Responsive Student Portal', 'Mentor Availability Matrix', 'Course Video Streaming'],
      App: ['Offline Video Downloads', 'Live Interactive Chat', 'Progress Analytics Widget'],
      Extension: ['Quick Notes Saver', 'Distraction Blocker', 'Class Schedule Reminders']
    }
  }
};

export default function CaseStudyDetail({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug || 'flipshope';
  const project = projects[slug] || projects['flipshope'];

  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-6 mb-20">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={18} /> Back to Case Studies
        </Link>

        {/* Hero */}
        <section className="space-y-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight"
          >
            {project.title}
          </motion.h1>
          
          <div className="aspect-video w-full rounded-[48px] overflow-hidden glass border border-white/10 relative">
            <img 
              src={project.img} 
              alt={project.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-accent-blue inline-block"></span>
                The Problem
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-accent-purple inline-block"></span>
                The AI Solution
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

            {project.platformFeatures && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-px bg-yellow-400 inline-block"></span>
                  Platform Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(project.platformFeatures).map(([platform, features]) => {
                    const Icon = platform === 'Web' ? Globe : platform === 'App' ? Smartphone : Puzzle;
                    return (
                      <div key={platform} className="p-6 rounded-3xl glass border border-white/5 space-y-4">
                        <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
                          <Icon className="text-yellow-400" size={24} />
                          {platform} App
                        </div>
                        <ul className="text-gray-400 space-y-2 list-none">
                          {features.map((f, idx) => (
                            <li key={idx} className="flex gap-2 text-sm md:text-base items-start">
                              <span className="text-yellow-400 font-bold mt-0.5">•</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-green-400 inline-block"></span>
                Key Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.results.map((r, i) => (
                  <div key={i} className="p-6 rounded-3xl glass border border-white/5 space-y-4">
                    <CheckCircle className="text-accent-blue" size={24} />
                    <p className="text-white font-bold text-lg leading-snug">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 rounded-[40px] glass border border-white/10 space-y-8">
              <h3 className="text-2xl font-bold text-white">Project Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tech Stack</p>
                    <p className="text-white font-medium">{project.tech.join(', ')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple border border-accent-purple/20">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Timeline</p>
                    <p className="text-white font-medium">30 Days (Completed early)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Industry</p>
                    <p className="text-white font-medium">Enterprise SaaS</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="block w-full py-4 rounded-2xl bg-white text-black text-center font-black hover:bg-accent-blue transition-all">
                Let's Build Yours
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ContactForm />
    </div>
  );
}
