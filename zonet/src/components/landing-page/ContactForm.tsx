'use client';

import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { useState } from 'react';

const projectTypes = [
  'SaaS', 'AI/ML', 'Web App', 'Mobile App', 'Design System', 'Other'
];

const budgets = [
  '<$10k', '$10k-$25k', '$25k-$50k', '$50k+'
];

const timelines = [
  'Immediately', 'Within 1 month', '1-3 months', '3+ months'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'SaaS',
    budget: '$10k-$25k',
    timeline: 'Within 1 month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-[#F7F6F3] overflow-hidden border-t border-border-custom relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Get in Touch
            </motion.div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1] font-heading text-foreground">
                Let's Build <br />
                Something <span className="text-accent underline decoration-accent/20 underline-offset-8">Great.</span>
              </h2>
              <p className="text-base md:text-lg text-muted max-w-sm leading-relaxed font-medium">
                Ready to ship your next big idea? Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-accent/5 border border-border-custom flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted uppercase tracking-widest">Email Us At</p>
                  <p className="text-base font-black text-foreground font-heading">business@zonettech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-accent/5 border border-border-custom flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted uppercase tracking-widest">Call Us</p>
                  <p className="text-base font-black text-foreground font-heading">+91 9166572332</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-accent/5 border border-border-custom flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted uppercase tracking-widest">Our HQ</p>
                  <p className="text-base font-black text-foreground font-heading">Jaipur Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form / Project Planner */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-card/40 backdrop-blur-xl p-6 md:p-12 rounded-[32px] border border-border-custom shadow-2xl overflow-hidden"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 size={44} className="text-accent" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-foreground font-heading">Message Received!</h3>
                    <p className="text-muted font-medium">Our team will get back to you within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-accent font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-muted uppercase tracking-widest px-1">Full Name</label>
                        <input
                          type="text" 
                          required
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-card/50 border border-border-custom rounded-2xl px-6 py-4 outline-none focus:border-accent/40 transition-all text-foreground font-bold font-heading placeholder:text-muted/30"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-muted uppercase tracking-widest px-1">Email Address</label>
                        <input
                          type="email" 
                          required
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-card/50 border border-border-custom rounded-2xl px-6 py-4 outline-none focus:border-accent/40 transition-all text-foreground font-bold font-heading placeholder:text-muted/30"
                        />
                      </div>
                    </div>

                    {/* Project Type Chips */}
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-muted uppercase tracking-widest px-1">What are we building?</label>
                      <div className="flex flex-wrap gap-2.5">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${formData.projectType === type
                                ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                                : 'bg-card/30 text-muted border-border-custom hover:border-accent/30'
                              }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-muted uppercase tracking-widest px-1">Estimate Budget</label>
                        <div className="flex flex-wrap gap-2.5">
                          {budgets.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all duration-300 border ${formData.budget === b
                                  ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                                  : 'bg-card/30 text-muted border-border-custom hover:border-accent/30'
                                }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-muted uppercase tracking-widest px-1">Project Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full bg-card/50 border border-border-custom rounded-2xl px-6 py-4 outline-none focus:border-accent/40 transition-all text-foreground font-black font-heading appearance-none cursor-pointer"
                        >
                          {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted uppercase tracking-widest px-1">Project Details</label>
                      <textarea 
                        rows={3}
                        placeholder="Briefly describe your vision..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-card/50 border border-border-custom rounded-2xl px-6 py-4 outline-none focus:border-accent/40 transition-all text-foreground font-bold font-heading resize-none placeholder:text-muted/30"
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-accent text-white rounded-2xl py-5 font-black text-lg hover:scale-[1.01] hover:bg-accent/90 active:scale-[0.99] transition-all flex items-center justify-center gap-4 group shadow-[0_20px_50px_rgba(0,0,0,0.1)] uppercase tracking-tighter"
                      >
                        Kickstart Your Project <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    </div>
                  </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
    </section>
  );
};

export default ContactForm;
