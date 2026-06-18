"use client";

import { motion, AnimatePresence } from "motion/react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { SectionBadge } from "@/components/ui";

const testimonials = [
  {
    text: "We needed a platform that wouldn't crash the moment we hit a few thousand users. The team at Zonettech didn't just build it — they built a foundation that handles our growth effortlessly. They made the complex stuff feel easy.",
    author: "Rahul Sharma",
    role: "Founder, Scale-Up Startup",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    text: "Adding AI felt intimidating until we started working with this team. They integrated smart features that actually make sense for our customers, all while keeping our brand voice perfectly intact. It's rare to find engineers who 'get' storytelling this well.",
    author: "Priya Mehta",
    role: "Product Lead, AI Integration",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    text: "From strategy to deployment, everything was smooth and perfect. Our users love the new experience, and so do we!",
    author: "Arjun Kapoor",
    role: "Co-Founder, Digital Product",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    text: "Never knew before that AI could help our website and app grow faster. Thanks to the Zonet team for the wonderful integration of AI in our business.",
    author: "Sneha Joshi",
    role: "Business Owner, E-Commerce",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="py-20 md:py-28 bg-[#F7F6F3] border-t border-[#E6E4DF] overflow-hidden relative">

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <SectionBadge className="mb-6">Testimonials</SectionBadge>
          <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] tracking-tight mb-4">
            Trusted By{" "}
            <span className="text-[#E8C547]">Founders & Teams</span>
          </h2>
          <p className="font-sans text-sm text-[#686B6B] max-w-md leading-relaxed">
            Zonet Tech is pleased to share the success stories of the businesses we have worked with. We would love to add yours next!
          </p>
        </div>

        {/* Main Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white border border-[#E6E4DF] rounded-[28px] p-8 md:p-12 shadow-sm"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-[#F7F6F3] flex items-center justify-center mb-8">
                <Quote size={18} className="text-[#1A1A1A]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} className="fill-[#E8C547] text-[#E8C547]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-lg md:text-xl text-[#1A1A1A] leading-relaxed mb-10 max-w-3xl">
                &ldquo;{current.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t border-[#E6E4DF]">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E6E4DF]"
                />
                <div>
                  <p className="font-sans font-bold text-[#1A1A1A] text-[15px]">{current.author}</p>
                  <p className="font-sans text-[12px] text-[#686B6B] mt-0.5">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">

          {/* Dots */}
          <div className="flex items-center gap-2">
            {mounted && testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? "w-6 bg-[#E8C547]" : "w-1.5 bg-[#E6E4DF] hover:bg-[#686B6B]/30"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-[#E6E4DF] bg-white flex items-center justify-center text-[#686B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all duration-200 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-[#E6E4DF] bg-white flex items-center justify-center text-[#686B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all duration-200 group"
            >
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mini previews */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left ${
                active === i
                  ? "border-[#1A1A1A] bg-white"
                  : "border-[#E6E4DF] bg-white hover:border-[#1A1A1A]/30"
              }`}
            >
              <img
                src={t.avatar}
                alt={t.author}
                className="w-8 h-8 rounded-full object-cover shrink-0 border border-[#E6E4DF]"
              />
              <div className="min-w-0">
                <p className={`font-sans text-[11px] font-bold truncate transition-colors ${active === i ? "text-[#1A1A1A]" : "text-[#686B6B]"}`}>
                  {t.author.split(" ")[0]}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
