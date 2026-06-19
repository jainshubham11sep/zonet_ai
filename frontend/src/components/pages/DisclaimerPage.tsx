'use client';

import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function Disclaimer() {
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
              <Shield className="w-6 h-6 text-[#E8A020]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-serif">Disclaimer</h1>
          </div>
          
          <div className="prose prose-lg text-[#4B5563] max-w-none">
            <p className="text-sm font-medium text-[#888888]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">1. General Information</h2>
            <p className="mb-6">The information provided by Zonet AI ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">2. Professional Disclaimer</h2>
            <p className="mb-6">The Site cannot and does not contain legal, financial, or specific professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.</p>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">3. External Links Disclaimer</h2>
            <p className="mb-6">The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
