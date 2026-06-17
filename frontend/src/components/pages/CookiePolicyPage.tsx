'use client';

import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function CookiePolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-serif">Cookie Policy</h1>
          </div>
          
          <div className="prose prose-lg text-[#4B5563] max-w-none">
            <p className="text-sm font-medium text-[#888888]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">1. What Are Cookies</h2>
            <p className="mb-6">As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">3. The Cookies We Set</h2>
            <ul className="list-disc pl-6 space-y-4 mb-6">
              <li>
                <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
              </li>
              <li>
                <strong>Third Party Cookies:</strong> In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site. This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">4. Disabling Cookies</h2>
            <p className="mb-6">You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
