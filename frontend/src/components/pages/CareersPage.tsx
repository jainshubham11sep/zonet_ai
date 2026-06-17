'use client';

import { motion } from 'motion/react';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function Careers() {
  const jobs = [
    { title: 'Senior Frontend Developer', location: 'Remote / India', type: 'Full-time' },
    { title: 'AI Solutions Architect', location: 'Remote', type: 'Full-time' },
    { title: 'UI/UX Designer', location: 'Jaipur, India', type: 'Full-time' },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FEF3DC] flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-[#E8A020]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-serif">Careers</h1>
          </div>

          <p className="text-lg text-[#4B5563] mb-10 max-w-2xl">
            Join us in building the future of AI-powered solutions. We're always looking for passionate individuals to join our growing team.
          </p>

          <div className="flex flex-col gap-4">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white border border-[#E5E1DA] rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] font-semibold text-[#1A1A1A] group-hover:text-[#E8A020] transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 text-[14px] text-[#6B7280]">
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 px-4 py-2 bg-[#FAFAF8] text-[#1A1A1A] text-sm font-medium rounded-lg group-hover:bg-[#FEF3DC] group-hover:text-[#E8A020] transition-colors flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-[#FFFBEB] border border-[#FFEDD5] rounded-2xl">
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Don't see a perfect fit?</h3>
            <p className="text-[#4B5563] mb-6">Send us your resume anyway! We're always eager to meet talented people.</p>
            <a href="mailto:careers@zonnetech.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#E8A020] border border-[#E8A020] font-medium rounded-xl hover:bg-[#E8A020] hover:text-white transition-colors">
              Email your Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
