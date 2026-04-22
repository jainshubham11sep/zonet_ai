'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLoad = () => {
        setTimeout(() => setIsLoading(false), 1500);
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        const timeout = setTimeout(handleLoad, 5000);
        return () => {
          window.removeEventListener('load', handleLoad);
          clearTimeout(timeout);
        };
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center"
          >
            <DotLottieReact
              src="/images/zonet/zonet.lottie"
              autoplay
              loop
              speed={1.2}
              className="w-full h-full"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">
                  Engineering the Future
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-75" />
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
