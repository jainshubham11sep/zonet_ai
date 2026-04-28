'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle2, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const projectTypes = [
  'SaaS', 'AI / ML', 'Web App', 'Mobile App', 'Design System', 'Other'
];

const budgets = [
  '< $10K', '$10K - $25K', '$25K - $50K', '$50K+'
];

const timelines = [
  'Immediately', 'Within 1 month', '1-3 months', '3+ months'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'SaaS',
    budget: '$10K - $25K',
    timeline: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F6F3] overflow-hidden border-t border-[#E6E4DF] relative">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-start relative">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-5 space-y-10 relative z-10 pt-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8C547]"></div>
              <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
                Get in Touch
              </span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] text-[#1A1A1A] font-heading">
                Let's build <br />
                something <br />
                <em
                  className="italic relative inline-block pr-3"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 18' preserveAspectRatio='none'><path d='M3 11 C 60 3, 140 3, 220 8 S 290 14, 297 9' stroke='%23F5C518' stroke-width='6' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 95%",
                    backgroundSize: "100% 0.35em",
                    paddingBottom: "0.05em",
                  }}
                >
                  great.
                </em>
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#686B6B] max-w-sm leading-relaxed font-medium">
                Share your idea with us and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col pt-8 max-w-[340px]">
              {/* Contact item 1 */}
              <div className="flex items-center justify-between py-5 border-t border-b border-[#E6E4DF] group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-full bg-[#E6E4DF]/50 flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[10px] font-black text-[#686B6B] uppercase tracking-widest">Email Us At</p>
                    <p className="text-[14px] font-bold text-[#1A1A1A]">business@zonettech.com</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#1A1A1A] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              
              {/* Contact item 2 */}
              <div className="flex items-center justify-between py-5 border-b border-[#E6E4DF] group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-full bg-[#E6E4DF]/50 flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[10px] font-black text-[#686B6B] uppercase tracking-widest">Call Us</p>
                    <p className="text-[14px] font-bold text-[#1A1A1A]">+91 9166572332</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#1A1A1A] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Contact item 3 */}
              <div className="flex items-center justify-between py-5 border-b border-[#E6E4DF] group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-full bg-[#E6E4DF]/50 flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[10px] font-black text-[#686B6B] uppercase tracking-widest">Our HQ</p>
                    <p className="text-[14px] font-bold text-[#1A1A1A]">Jaipur Rajasthan, India</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#1A1A1A] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          </div>

          {/* Connector Graphic (Desktop Only) */}
          <div className="hidden lg:block absolute left-[38%] top-[60%] -translate-y-1/2 w-[120px] h-[350px] z-0 pointer-events-none">
            {/* The line */}
            <svg width="100%" height="100%" viewBox="0 0 100 350" preserveAspectRatio="none" className="overflow-visible absolute top-0 left-0">
              <path d="M 0 175 L 45 175 L 45 50 L 100 10" stroke="#E6E4DF" strokeWidth="1.5" fill="none" />
            </svg>
            {/* The dotted grid pattern */}
            <div className="absolute top-[135px] left-[-30px] w-24 h-24 bg-[radial-gradient(#E6E4DF_1.5px,transparent_1.5px)] [background-size:6px_6px] opacity-70"></div>
            {/* The glowing dot */}
            <div className="absolute left-[0px] top-[175px] -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 rounded-full bg-[#E8C547] relative z-10"></div>
              <div className="w-6 h-6 rounded-full border border-[#E8C547]/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-[#FCFCF9] p-8 md:p-12 rounded-[32px] border border-[#E6E4DF] shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden"
            >
              {/* Diagonal lines pattern at bottom right */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-50 pointer-events-none" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #E6E4DF, #E6E4DF 1px, transparent 1px, transparent 6px)`
              }}></div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-6 relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-[#E8C547]/10 flex items-center justify-center">
                    <CheckCircle2 size={44} className="text-[#E8C547]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-[#1A1A1A] font-heading">Message Received!</h3>
                    <p className="text-[#686B6B] font-medium">Our team will get back to you within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#1A1A1A] font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  
                  {/* Step 1 */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-black text-[#E8C547] tracking-widest">01</span>
                      <span className="text-[11px] font-black text-[#686B6B] tracking-widest uppercase">Tell us about your project</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text" 
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FCFCF9] border border-[#E6E4DF] rounded-[14px] px-5 py-3.5 outline-none focus:border-[#1A1A1A] transition-all text-[#1A1A1A] font-medium text-[13px] placeholder:text-[#686B6B]/50"
                      />
                      <input
                        type="email" 
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FCFCF9] border border-[#E6E4DF] rounded-[14px] px-5 py-3.5 outline-none focus:border-[#1A1A1A] transition-all text-[#1A1A1A] font-medium text-[13px] placeholder:text-[#686B6B]/50"
                      />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-black text-[#E8C547] tracking-widest">02</span>
                      <span className="text-[11px] font-black text-[#686B6B] tracking-widest uppercase">What are we building?</span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-5 py-2 rounded-full text-[12px] transition-all duration-300 border ${formData.projectType === type
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                              : 'bg-[#FCFCF9] text-[#686B6B] border-[#E6E4DF] hover:border-[#1A1A1A]/30'
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3 & 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-black text-[#E8C547] tracking-widest">03</span>
                        <span className="text-[11px] font-black text-[#686B6B] tracking-widest uppercase">Estimate Budget</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-4 py-2 rounded-full text-[11px] font-medium transition-all duration-300 border ${formData.budget === b
                                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                                : 'bg-[#FCFCF9] text-[#686B6B] border-[#E6E4DF] hover:border-[#1A1A1A]/30'
                              }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-black text-[#E8C547] tracking-widest">04</span>
                        <span className="text-[11px] font-black text-[#686B6B] tracking-widest uppercase">Project Timeline</span>
                      </div>
                      <div className="relative">
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className={`w-full bg-[#FCFCF9] border border-[#E6E4DF] rounded-[14px] px-5 py-3.5 outline-none focus:border-[#1A1A1A] transition-all font-medium text-[13px] appearance-none cursor-pointer ${formData.timeline === '' ? 'text-[#686B6B]/50' : 'text-[#1A1A1A]'}`}
                        >
                          <option value="" disabled hidden>Select Timeline</option>
                          {timelines.map(t => <option key={t} value={t} className="text-[#1A1A1A]">{t}</option>)}
                        </select>
                        <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#686B6B] pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-black text-[#E8C547] tracking-widest">05</span>
                      <span className="text-[11px] font-black text-[#686B6B] tracking-widest uppercase">Project Details</span>
                    </div>
                    <textarea 
                      rows={4}
                      placeholder="Briefly describe your vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FCFCF9] border border-[#E6E4DF] rounded-[14px] px-5 py-4 outline-none focus:border-[#1A1A1A] transition-all text-[#1A1A1A] font-medium text-[13px] resize-none placeholder:text-[#686B6B]/50"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#1A1A1A] text-white rounded-[16px] py-4 font-bold text-[13px] hover:bg-[#1A1A1A]/90 transition-all flex items-center justify-center gap-3 group uppercase tracking-widest shadow-sm"
                    >
                      Kickstart Your Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
