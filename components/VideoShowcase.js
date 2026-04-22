'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 'v1',
    title: 'How We Built a SaaS Dashboard in 14 Days',
    category: 'Case Study',
    duration: '4:32',
    thumbnail: '/images/zonet/screenshot-1.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Full breakdown of our design-to-development process for a VC-backed AI SaaS company.',
  },
  {
    id: 'v2',
    title: 'AI-First Design: Building for 1M+ Users',
    category: 'Process',
    duration: '6:15',
    thumbnail: '/images/zonet/screenshot-2.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Learn how we design AI-native interfaces that scale seamlessly for massive user bases.',
  },
  {
    id: 'v3',
    title: 'From Figma to Production in 7 Days',
    category: 'Speed Run',
    duration: '8:44',
    thumbnail: '/images/zonet/screenshot-3.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Watch our team take a complex Figma design and ship it to production in a single week.',
  },
  {
    id: 'v4',
    title: 'Integrating LLMs into Enterprise Workflows',
    category: 'AI Special',
    duration: '12:20',
    thumbnail: '/images/zonet/screenshot-4.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'A deep dive into how we use LangChain and Vector databases to power custom AI agents.',
  },
  {
    id: 'v5',
    title: 'Scaling React Native Apps to Global Markets',
    category: 'Mobile',
    duration: '10:15',
    thumbnail: '/images/zonet/screenshot-5.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Best practices for internationalization, offline support, and performance in mobile apps.',
  },
  {
    id: 'v6',
    title: 'The Future of Web Interactivity with Framer Motion',
    category: 'Design',
    duration: '5:45',
    thumbnail: '/images/zonet/screenshot-6.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'How we create buttery smooth animations that enhance user experience without sacrificing speed.',
  },
  {
    id: 'v7',
    title: 'Optimizing Conversion: A Data-Driven Approach',
    category: 'Marketing',
    duration: '7:30',
    thumbnail: '/images/zonet/screenshot-1.png',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Case study on how we improved checkout flow to increase revenue by 40% for our clients.',
  },
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = videos[activeVideo];

  return (
    <section className="section-padding bg-section-alt border-t border-border-custom overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Inside ZonetTech
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[1] font-heading max-w-3xl"
          >
            Watch Us Build <br className="hidden md:block" /> 
            <span className="text-muted">The Future Of AI</span>
          </motion.h2>
        </div>

        {/* Master-Detail Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Using grid with items-stretch to align heights perfectly */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 lg:items-stretch min-h-0">
            
            {/* LEFT: Main Player Area (Dictates the height) */}
            <div className="w-full lg:col-span-2 flex flex-col min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-[32px] overflow-hidden border border-border-custom shadow-2xl bg-card w-full aspect-video flex-shrink-0"
                >
                  {!playing ? (
                    <div className="relative w-full h-full bg-card group">
                      <img
                        src={current.thumbnail}
                        alt={current.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500" />
                      
                      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                        <span className="px-3 py-1.5 rounded-lg bg-accent text-white text-[9px] font-black uppercase tracking-widest border border-white/20 shadow-lg">
                          {current.category}
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[9px] font-black border border-white/10 shadow-sm">
                          {current.duration}
                        </span>
                      </div>

                      <button
                        onClick={() => setPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center w-full h-full"
                      >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.4)] group-hover:scale-110 transition-transform duration-300 border border-white/20">
                          <Play size={28} className="text-accent ml-1 fill-accent" />
                        </div>
                      </button>

                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                        <h3 className="text-white text-2xl md:text-3xl font-black font-heading tracking-tight leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          {current.title}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1`}
                        title={current.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                      <button
                        onClick={() => setPlaying(false)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black transition-all border border-white/10"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 md:mt-8 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black text-foreground font-heading tracking-tighter leading-tight">{current.title}</h3>
                <p className="text-muted mt-3 md:mt-4 text-sm md:text-lg leading-relaxed font-medium max-w-3xl">{current.description}</p>
              </div>
            </div>

            {/* RIGHT: Scrollable Playlist Sidebar */}
            <div className="w-full lg:col-span-1 relative h-[400px] lg:h-auto overflow-hidden">
              <div className="lg:absolute lg:inset-0 flex flex-col bg-card backdrop-blur-xl rounded-[32px] border border-border-custom shadow-sm overflow-hidden h-full">
                {/* Header */}
                <div className="p-5 border-b border-border-custom/30 flex items-center justify-between flex-shrink-0 bg-card/60">
                  <h4 className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">
                    Up Next ({videos.length} Videos)
                  </h4>
                </div>
                
                {/* Scrollable List locked to parent height */}
                <div className="flex-1 overflow-y-auto scrollbar-hide py-2">
                  {videos.map((video, idx) => (
                    <button
                      key={video.id}
                      onClick={() => { setActiveVideo(idx); setPlaying(false); }}
                      className={`w-full flex items-center gap-4 p-4 transition-all duration-300 text-left border-b border-border-custom/10 last:border-0 relative group ${
                        activeVideo === idx 
                          ? 'bg-accent/5' 
                          : 'hover:bg-accent/5'
                      }`}
                    >
                      {/* Rectangular Thumbnail */}
                      <div className="relative w-24 md:w-32 lg:w-24 xl:w-28 h-16 md:h-20 lg:h-16 xl:h-18 flex-shrink-0 rounded-xl overflow-hidden bg-black border border-border-custom/30 transition-transform group-hover:scale-105">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className={`object-cover w-full h-full transition-all duration-500 ${activeVideo === idx ? 'opacity-40' : 'group-hover:opacity-70'}`} 
                        />
                        
                        {activeVideo === idx ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent text-white shadow-xl">
                                {playing ? (
                                  <div className="flex gap-0.5 items-end h-2">
                                    <div className="w-0.5 bg-white animate-bounce-short" />
                                    <div className="w-0.5 bg-white animate-bounce-short delay-75" />
                                    <div className="w-0.5 bg-white animate-bounce-short delay-150" />
                                  </div>
                                ) : (
                                  <Play size={10} className="fill-white" />
                                )}
                             </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <Play size={14} className="text-white fill-white" />
                          </div>
                        )}

                        <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-white text-[8px] font-black uppercase tracking-tighter">
                          {video.duration}
                        </div>
                      </div>
                      
                      <div className="flex flex-col justify-center overflow-hidden flex-1">
                        <span className={`text-[8px] font-black uppercase tracking-[0.2em] mb-1.5 ${activeVideo === idx ? 'text-accent' : 'text-muted'}`}>
                          {video.category}
                        </span>
                        <h4 className={`text-[13px] font-black leading-tight line-clamp-2 font-heading tracking-tight ${activeVideo === idx ? 'text-foreground' : 'text-foreground/80'}`}>
                          {video.title}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
