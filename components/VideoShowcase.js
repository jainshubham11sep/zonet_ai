'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    id: 'v1',
    title: 'How We Built a SaaS Dashboard in 14 Days',
    category: 'Case Study',
    duration: '4:32',
    thumbnail: '/images/2ruVv5YDP05Q2HMxhD0Xq8H6WL8.png',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube IDs
    description: 'Full breakdown of our design-to-development process for a VC-backed AI SaaS company.',
  },
  {
    id: 'v2',
    title: 'AI-First Design: Building for 1M+ Users',
    category: 'Process',
    duration: '6:15',
    thumbnail: '/images/038lIVTRwtwg9CZvkKNwupKc0.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Learn how we design AI-native interfaces that scale seamlessly for massive user bases.',
  },
  {
    id: 'v3',
    title: 'From Figma to Production in 7 Days',
    category: 'Speed Run',
    duration: '8:44',
    thumbnail: '/images/Dj9JurmXp6kxW2DKecZTneI5g3s.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Watch our team take a complex Figma design and ship it to production in a single week.',
  },
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handlePrev = () => {
    setPlaying(false);
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };
  const handleNext = () => {
    setPlaying(false);
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const current = videos[activeVideo];

  return (
    <section className="py-24 bg-section-alt border-t border-border-custom overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted mb-4 uppercase tracking-[0.2em]"
          >
            Inside ZonetTech
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter leading-[1.1] font-heading"
          >
            Watch Us <span className="text-muted">Build</span>
          </motion.h2>
        </div>

        {/* Main Player Area */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[32px] overflow-hidden border border-border-custom shadow-2xl bg-card"
            >
              {!playing ? (
                /* Thumbnail with play button */
                <div className="relative aspect-video bg-card-alt">
                  <img
                    src={current.thumbnail}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Category + duration overlay */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest">
                      {current.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-bold">
                      {current.duration}
                    </span>
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-black ml-1 fill-black" />
                    </div>
                  </button>

                  {/* Title Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-xl md:text-2xl font-bold font-heading leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">{current.description}</p>
                  </div>
                </div>
              ) : (
                /* Embedded YouTube Player */
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1`}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  <button
                    onClick={() => setPlaying(false)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation + Thumbnail Strip */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-border-custom bg-card flex items-center justify-center text-foreground hover:bg-button-bg hover:text-button-fg transition-all flex-shrink-0"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Thumbnail Strip */}
            <div className="flex gap-4 overflow-x-auto flex-1 pb-1">
              {videos.map((video, idx) => (
                <button
                  key={video.id}
                  onClick={() => { setActiveVideo(idx); setPlaying(false); }}
                  className={`relative flex-shrink-0 w-32 md:w-44 aspect-video rounded-[16px] overflow-hidden border-2 transition-all duration-300 ${
                    activeVideo === idx ? 'border-foreground scale-105 shadow-lg' : 'border-border-custom opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                    {video.duration}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-border-custom bg-card flex items-center justify-center text-foreground hover:bg-button-bg hover:text-button-fg transition-all flex-shrink-0"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setActiveVideo(idx); setPlaying(false); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeVideo === idx ? 'w-8 bg-foreground' : 'w-1.5 bg-border-custom'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
