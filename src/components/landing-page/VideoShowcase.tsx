'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Settings, Maximize2, Volume2 } from 'lucide-react';

const videos = [
  {
    id: 'v1',
    title: 'How We Built a SaaS Dashboard in 14 Days',
    category: 'Case Study',
    duration: '04:32',
    thumbnail: '/images/zonet/screenshot-1.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Full breakdown of our design-to-development process for a VC-backed AI SaaS company.',
    progress: 28,
  },
  {
    id: 'v2',
    title: 'AI-First Design: Building for 1M+ Users',
    category: 'Process',
    duration: '06:15',
    thumbnail: '/images/zonet/screenshot-2.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Learn how we design AI-native interfaces that scale seamlessly for massive user bases.',
    progress: 0,
  },
  {
    id: 'v3',
    title: 'From Figma to Production in 7 Days',
    category: 'Speed Run',
    duration: '04:44',
    thumbnail: '/images/zonet/screenshot-3.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Watch our team take a complex Figma design and ship it to production in a single week.',
    progress: 0,
  },
  {
    id: 'v4',
    title: 'Integrating LLMs into Enterprise Workflows',
    category: 'AI Special',
    duration: '05:20',
    thumbnail: '/images/zonet/screenshot-4.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'A deep dive into how we use LangChain and Vector databases to power custom AI agents.',
    progress: 0,
  },
  {
    id: 'v5',
    title: 'Scaling React Native Apps to Global Markets',
    category: 'Mobile',
    duration: '06:18',
    thumbnail: '/images/zonet/screenshot-5.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Best practices for internationalization, offline support, and performance in mobile apps.',
    progress: 0,
  },
];

const categoryColors: Record<string, string> = {
  'Case Study': '#4F46E5',
  'Process': '#7C3AED',
  'Speed Run': '#0891B2',
  'AI Special': '#059669',
  'Mobile': '#D97706',
};

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = videos[activeVideo];
  const categoryColor = categoryColors[current.category] ?? '#4F46E5';

  return (
    <section className="py-24 md:py-32 bg-[#F7F6F3] overflow-hidden relative border-t border-[#E6E4DF]">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#E8C547]" />
            <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
              Inside ZonetTech
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold text-[#1A1A1A] tracking-tight leading-[1.05] font-heading max-w-3xl mb-6"
          >
            Watch Us Build <br />
            <em
              className="italic relative inline-block font-normal"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 18' preserveAspectRatio='none'><path d='M3 11 C 60 3, 140 3, 220 8 S 290 14, 297 9' stroke='%23E8C547' stroke-width='6' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 100%',
                backgroundSize: '100% 0.35em',
                paddingBottom: '0.1em',
              }}
            >
              The Future Of AI
            </em>
          </motion.h2>

          <p className="text-[15px] md:text-[16px] text-[#686B6B] max-w-[560px] leading-relaxed mx-auto">
            Explore how we turn complex ideas into intelligent products
            <br className="hidden md:block" />
            through design, engineering, and innovation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-6 items-start max-w-[1200px] mx-auto">

          {/* LEFT: Video Player */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full rounded-2xl overflow-hidden bg-[#111] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              >
                {!playing ? (
                  <>
                    {/* Thumbnail area */}
                    <div
                      className="relative w-full aspect-video cursor-pointer group"
                      onClick={() => setPlaying(true)}
                    >
                      <img
                        src={current.thumbnail}
                        alt={current.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 group-hover:from-black/50 transition-all duration-400" />

                      {/* Top badges */}
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                        <span
                          className="px-3 py-1 rounded-md text-white text-[10px] font-bold uppercase tracking-widest shadow-sm"
                          style={{ backgroundColor: categoryColor }}
                        >
                          {current.category}
                        </span>
                        <span className="px-3 py-1 rounded-md bg-[#1A1A1A]/75 backdrop-blur-sm text-white text-[11px] font-bold tabular-nums">
                          {current.duration}
                        </span>
                      </div>

                      {/* Center play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[68px] h-[68px] rounded-full bg-white/92 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                          <Play size={24} className="fill-[#1A1A1A] text-[#1A1A1A] translate-x-0.5" />
                        </div>
                      </div>

                      {/* Progress bar — overlaid at bottom of video */}
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20">
                        <div
                          className="h-full bg-[#4F46E5] relative"
                          style={{ width: `${current.progress}%` }}
                        >
                          {current.progress > 0 && (
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-md" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Control bar */}
                    <div className="flex items-center justify-between px-5 py-3 bg-[#F9F8F5]">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setPlaying(true)}
                          className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors duration-200"
                          aria-label="Play"
                        >
                          <Play size={17} className="fill-[#1A1A1A]/50 hover:fill-[#1A1A1A]" />
                        </button>
                        <button
                          className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors duration-200"
                          aria-label="Volume"
                        >
                          <Volume2 size={17} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors duration-200"
                          aria-label="Settings"
                        >
                          <Settings size={17} />
                        </button>
                        <button
                          className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors duration-200"
                          aria-label="Fullscreen"
                        >
                          <Maximize2 size={17} />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1`}
                      title={current.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                    <button
                      onClick={() => setPlaying(false)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black transition-all border border-white/10"
                      aria-label="Close"
                    >
                      <X size={18} />
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Title & description below player */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + '-meta'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-5 px-1"
              >
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#1A1A1A] font-heading leading-snug mb-1.5">
                  {current.title}
                </h3>
                <p className="text-[14px] text-[#686B6B] leading-relaxed">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Playlist sidebar */}
          <div className="flex flex-col bg-white rounded-2xl border border-[#E6E4DF] shadow-sm overflow-hidden">
            {/* Sidebar header */}
            <div className="px-6 py-4 border-b border-[#E6E4DF]">
              <span className="text-[10px] font-black text-[#686B6B] uppercase tracking-[0.18em]">
                Up Next ({videos.length} Videos)
              </span>
            </div>

            {/* Video list */}
            <div className="flex flex-col divide-y divide-[#E6E4DF]">
              {videos.map((video, idx) => (
                <button
                  key={video.id}
                  onClick={() => { setActiveVideo(idx); setPlaying(false); }}
                  className={`w-full flex items-center gap-4 px-4 py-4 text-left transition-colors duration-200 group ${
                    activeVideo === idx ? 'bg-[#F5F4FF]' : 'bg-white hover:bg-[#FAFAFA]'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-[88px] h-[60px] flex-shrink-0 rounded-lg overflow-hidden bg-[#1A1A1A]">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-90"
                    />

                    {activeVideo === idx ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                        <div className="w-7 h-7 rounded-full bg-[#4F46E5] flex items-center justify-center shadow-md">
                          <Play size={10} className="fill-white text-white translate-x-px" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                          <Play size={10} className="fill-[#1A1A1A] translate-x-px" />
                        </div>
                      </div>
                    )}

                    {/* Duration badge */}
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-[#1A1A1A]/80 text-white text-[8px] font-bold tabular-nums">
                      {video.duration}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex-1 min-w-0">
                    <span
                      className="block text-[9px] font-black uppercase tracking-[0.14em] mb-1"
                      style={{ color: activeVideo === idx ? categoryColors[video.category] ?? '#4F46E5' : '#686B6B' }}
                    >
                      {video.category}
                    </span>
                    <h4 className="text-[12.5px] font-semibold text-[#1A1A1A] leading-[1.35] line-clamp-2 font-heading">
                      {video.title}
                    </h4>
                  </div>

                  {/* Duration */}
                  <div className="text-[11px] font-bold text-[#686B6B] flex-shrink-0 ml-1 tabular-nums">
                    {video.duration}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
