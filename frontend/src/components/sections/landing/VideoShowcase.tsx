"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play, X } from "lucide-react";
import { SectionBadge } from "@/components/ui";

const videos = [
  {
    id: "v1",
    youtubeId: "OHVONYSSYXk",
    thumbnail: "/images/zonet/screenshot-1.png",
    label: "Behind The Build",
  },
  {
    id: "v2",
    youtubeId: "4KKSiii-AI4",
    thumbnail: "/images/zonet/screenshot-2.png",
    label: "AI In Action",
  },
];

const VideoShowcase = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#F7F6F3] overflow-hidden relative border-t border-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <SectionBadge className="mb-5">Inside ZonetTech</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.08] mb-5"
          >
            Watch Us Build{" "}
            <span className="text-[#E8C547]">The Future Of AI</span>
          </motion.h2>

          <p className="font-sans text-sm md:text-base text-[#686B6B] max-w-md leading-relaxed">
            Explore how we can change the dynamics of your business with our AI software development services.
          </p>
        </div>

        {/* Video Grid — 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <div className="relative w-full rounded-[20px] overflow-hidden bg-[#1A1A1A] border border-[#E6E4DF] shadow-sm"
                style={{ aspectRatio: "9/16", maxHeight: 520 }}
              >
                {playing === video.id ? (
                  <>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                      title={video.label}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                    <button
                      onClick={() => setPlaying(null)}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black transition-all border border-white/10 z-10"
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setPlaying(video.id)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.label}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={22} className="fill-[#1A1A1A] text-[#1A1A1A] translate-x-0.5" />
                      </div>
                    </div>

                    {/* Label badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="font-sans text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-[#E8C547] text-[#1A1A1A]">
                        {video.label}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
