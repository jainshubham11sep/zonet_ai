'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Send, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', budget: '' });

  return (
    <section id="contact" className="relative py-20 pb-28 bg-background overflow-hidden border-t border-border-custom">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted w-fit uppercase tracking-widest"
            >
              Get in Touch
            </motion.div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] font-heading text-foreground">
                Let's Build <br />
                Something <span className="text-muted">Great.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted max-w-sm leading-relaxed">
                Ready to ship your next big idea? Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-icon-bg flex items-center justify-center group-hover:bg-button-bg group-hover:text-button-fg transition-all">
                  <Mail size={20} className="text-foreground group-hover:text-button-fg transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-widest">Email Us At</p>
                  <p className="text-lg font-bold text-foreground">hello@zonettech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-icon-bg flex items-center justify-center group-hover:bg-button-bg group-hover:text-button-fg transition-all">
                  <MapPin size={20} className="text-foreground group-hover:text-button-fg transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-widest">Our HQ</p>
                  <p className="text-lg font-bold text-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-[32px] border border-border-custom shadow-xl"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-input-bg border border-input-border rounded-2xl px-6 py-4 outline-none focus:border-foreground transition-all text-foreground font-medium placeholder:text-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@company.com"
                      className="w-full bg-input-bg border border-input-border rounded-2xl px-6 py-4 outline-none focus:border-foreground transition-all text-foreground font-medium placeholder:text-muted"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted uppercase tracking-widest px-1">Project Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe your project..."
                    className="w-full bg-input-bg border border-input-border rounded-2xl px-6 py-4 outline-none focus:border-foreground transition-all text-foreground font-medium resize-none placeholder:text-muted"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted uppercase tracking-widest px-1">Project Budget</label>
                    <select className="w-full bg-input-bg border border-input-border rounded-2xl px-6 py-4 outline-none focus:border-foreground transition-all text-foreground font-medium appearance-none">
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-button-bg text-button-fg rounded-2xl py-4 font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-lg">
                      Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-0 opacity-50" />
    </section>
  );
};

export default ContactForm;
