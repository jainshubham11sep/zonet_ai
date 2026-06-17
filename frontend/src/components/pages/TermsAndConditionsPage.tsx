'use client';

import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function TermsAndConditions() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-serif">Terms & Conditions</h1>
          </div>
          
          <div className="prose prose-lg text-[#4B5563] max-w-none">
            <p className="text-sm font-medium text-[#888888]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">2. Intellectual Property Rights</h2>
            <p className="mb-4">Unless otherwise stated, Zonet AI and/or its licensors own the intellectual property rights for all material on Zonet AI. All intellectual property rights are reserved. You may access this from Zonet AI for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p className="mb-4">You must not:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Republish material from Zonet AI</li>
              <li>Sell, rent or sub-license material from Zonet AI</li>
              <li>Reproduce, duplicate or copy material from Zonet AI</li>
              <li>Redistribute content from Zonet AI</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">3. User Content</h2>
            <p className="mb-6">In these Terms and Conditions, "Your User Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your User Content, you grant Zonet AI a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">4. Limitation of Liability</h2>
            <p className="mb-6">In no event shall Zonet AI, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Zonet AI, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
