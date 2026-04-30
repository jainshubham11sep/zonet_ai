'use client';

import { motion } from 'motion/react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "ZonetTech transformed our idea into a high-performing product. Their technical expertise and attention to detail are second to none.",
    author: "Arjun Mehta",
    role: "CTO, HyFam",
    initials: "AM",
  },
  {
    text: "The ZonetTech team feels like an extension of our own. They delivered our platform 3x faster without compromising on quality.",
    author: "Priya Sharma",
    role: "Product Head, MyFlipshope",
    initials: "PS",
  },
  {
    text: "From strategy to deployment, everything was seamless. Our users love the new experience and so do we!",
    author: "Rohit Verma",
    role: "Founder, Kroolo",
    initials: "RV",
  },
  {
    text: "Working with ZonetTech was a game changer for us. Their UI/UX design is beautiful and the frontend performance is incredibly fast.",
    author: "Sarah Jenkins",
    role: "VP of Product, FinServe",
    initials: "SJ",
  },
  {
    text: "They quickly understood our complex domain and delivered an AI integration that saved our team hundreds of hours a week.",
    author: "Michael Chang",
    role: "CEO, DataBridge",
    initials: "MC",
  },
  {
    text: "I was blown away by their speed. They went from Figma to a fully functional and scalable web application in less than three weeks.",
    author: "Elena Rodriguez",
    role: "Founder, MarketMind",
    initials: "ER",
  },
];

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex, mounted]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24 md:py-32 bg-[#F7F6F3] border-t border-[#E6E4DF] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8C547]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          {/* Yellow Dot Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8C547]"></div>
            <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
              Testimonials
            </span>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#1A1A1A] leading-[1.1] font-heading mb-6 tracking-tight"
          >
            Loved By {" "}
            <em
              className="italic relative inline-block pr-2"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 18' preserveAspectRatio='none'><path d='M3 11 C 60 3, 140 3, 220 8 S 290 14, 297 9' stroke='%23F5C518' stroke-width='6' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 95%",
                backgroundSize: "100% 0.3em",
                paddingBottom: "0.05em",
              }}
            >
              Founders & Teams
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#686B6B] text-[15px] max-w-[500px] leading-relaxed mx-auto"
          >
            We partner with ambitious companies and help them build products that users love and businesses rely on.
          </motion.p>
        </div>

        {/* Carousel Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 w-full relative"
        >
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="hidden md:flex absolute -left-4 xl:-left-12 z-10 w-12 h-12 rounded-full bg-white border border-[#E6E4DF] items-center justify-center text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#F7F6F3] transition-all shadow-sm group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Cards Container */}
          <div className="w-full max-w-[1040px] mx-auto z-0 overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${activeIndex * (100 / itemsPerView)}%` }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              {testimonials.map((t, idx) => {
                return (
                  <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-3 md:px-4 flex">
                    <div 
                      className={`relative p-8 md:p-10 rounded-[24px] flex flex-col justify-between shadow-sm transition-all duration-300 bg-[#FCFCF9] border border-[#E6E4DF] hover:border-[#1A1A1A]/30 hover:shadow-md h-full w-full`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#1A1A1A]/5 text-[#1A1A1A]/40`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.017 21L16.417 14.39C16.5938 13.9165 16.6853 13.4095 16.685 12.9V4H23V12.9C23 16.035 21.687 18.89 19.417 21H14.017ZM2.01703 21L4.41703 14.39C4.59385 13.9165 4.68532 13.4095 4.68503 12.9V4H11.001V12.9C11.001 16.035 9.68803 18.89 7.41703 21H2.01703Z" />
                            </svg>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} size={14} className="fill-[#E8C547] text-[#E8C547]" />
                            ))}
                          </div>
                        </div>
                        
                        <p className={`text-[14px] md:text-[15px] leading-relaxed mb-8 text-[#1A1A1A]`}>
                          "{t.text}"
                        </p>
                      </div>
                      
                      <div className="pt-6 border-t border-[#E6E4DF] flex items-center gap-4 mt-auto">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-black flex-shrink-0 border bg-[#F7F6F3] border-[#E6E4DF] text-[#1A1A1A]`}>
                          {t.initials}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[#1A1A1A] text-[14px] md:text-[15px]">{t.author}</span>
                          <span className="text-[11px] md:text-[12px] text-[#686B6B] mt-0.5">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="hidden md:flex absolute -right-4 xl:-right-12 z-10 w-12 h-12 rounded-full bg-white border border-[#E6E4DF] items-center justify-center text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#F7F6F3] transition-all shadow-sm group"
          >
            <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12 md:mt-16">
          {mounted && Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-[#E8C547] shadow-sm' : 'w-2 bg-[#E6E4DF] hover:bg-[#1A1A1A]/30'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

