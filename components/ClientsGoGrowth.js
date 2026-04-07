'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'Flipshope', category: 'Shopping AI', src: '/images/clients/flipshope-logo.png' },
  { name: 'Hyyzo', category: 'Cashback & Rewards', src: '/images/clients/hyyzo-logo.png' },
  { name: 'TeacherDekho', category: 'Ed-Tech', src: '/images/clients/teacherdekho-logo.png' },
  { name: 'Puno Games', category: 'Gaming', src: '/images/clients/punogames-logo.png' },
  { name: 'Karekasie', category: 'Consultancy', src: '/images/zonet/logo-light.png' }, // Placeholder for missing
  { name: 'Twitch Adblocker', category: 'Browser Tool', src: '/images/zonet/logo-light.png' }, // Placeholder for missing
  { name: 'Kroolo', category: 'Productivity', src: '/images/clients/kroolo-logo.png' },
  { name: 'My Flipshope', category: 'HRMS SaaS', src: '/images/clients/flipshope-logo.png' },
  { name: 'The Best Deals', category: 'Deals Platform', src: '/images/clients/thebestdeals-logo.png' },
  { name: 'HyyFam', category: 'Social Rewards', src: '/images/clients/hyyfam-logo.png' },
  { name: 'Hyzify', category: 'FinTech', src: '/images/clients/hyzify-logo.png' },
];

const ClientsGoGrowth = () => {
  return (
    <section className="py-8 md:py-12 bg-black overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading"
        >
          Our Clients
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-10 md:gap-16 items-center py-4"
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 flex-shrink-0 min-w-[120px] group/card">
              {/* Circular Logo Container */}
              <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-[4px] border-white/5 shadow-xl flex items-center justify-center p-4 md:p-6 overflow-hidden transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                <Image 
                  src={client.src} 
                  alt={client.name} 
                  width={60}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Client Info */}
              <div className="text-center">
                <h4 className="text-white font-bold text-base md:text-lg tracking-tight mb-0.5">
                  {client.name}
                </h4>
                <p className="text-muted/60 text-[10px] md:text-xs font-medium">
                  {client.category}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Improved Deep Gradient Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="mt-12 w-20 h-[1px] bg-white/10" />
    </section>
  );
};

export default ClientsGoGrowth;
