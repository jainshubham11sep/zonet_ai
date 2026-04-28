'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    title: "How AI Agents Are Rewriting Software Development",
    description: "Explore how AI agents are automating complex workflows and accelerating product delivery.",
    date: "May 12, 2025",
    image: "/images/zonet/article-1.jpg",
    link: "/blogs/ai-agents-software-development",
    category: "AI & Automation"
  },
  {
    title: "From Idea to Impact: Building Scalable Digital Products",
    description: "A practical guide to turning ideas into scalable products that users love and businesses rely on.",
    date: "Apr 28, 2025",
    image: "/images/zonet/article-2.jpg",
    link: "/blogs/building-scalable-digital-products",
    category: "Product Development"
  },
  {
    title: "Design Systems That Drive Consistency & Scale",
    description: "Design systems aren't just for products—they're for people, processes, and performance.",
    date: "Apr 10, 2025",
    image: "/images/zonet/article-3.jpg",
    link: "/blogs/design-systems-consistency-scale",
    category: "Design"
  }
];

export default function RelatedArticles() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F6F3] overflow-hidden relative">
      {/* The Black Background Area */}
      <div className="absolute top-12 right-[-10vw] bottom-12 left-[65%] bg-[#1A1A1A] rounded-tl-[40px] rounded-bl-[40px] z-0 hidden lg:block">
        {/* Thin white lines */}
        <div className="absolute left-[15%] top-[50%] w-px h-[50%] bg-white/20"></div>
        <div className="absolute left-[15%] top-[50%] w-[85%] h-px bg-white/20"></div>
        <svg className="absolute left-[calc(15%-60px)] top-[calc(50%-60px)] w-[60px] h-[60px]" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Yellow Dot Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8C547]"></div>
              <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
                Blogs & Insights
              </span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] leading-[1.1] font-heading mb-8 tracking-[-0.02em]"
            >
              Ideas, insights <br />
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
                & inspiration.
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#686B6B] text-[15px] mb-12 max-w-[340px] leading-relaxed"
            >
              Explore our latest thoughts on AI, product development, design, and technology—crafted to help you build better digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/blogs"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#1A1A1A] text-white font-bold text-[13px] rounded-full hover:bg-[#2A2A2A] transition-all w-fit"
              >
                View All Articles <ArrowUpRight size={16} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-8 relative w-full pt-12 lg:pt-0">
            {/* Faint connecting line behind cards */}
            <div className="absolute top-[50%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6E4DF] to-transparent z-0 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {articles.map((article, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative rounded-[20px] overflow-hidden bg-[#FCFCF9] border border-[#E6E4DF] hover:border-[#1A1A1A]/20 transition-all duration-300 flex flex-col h-full shadow-sm"
                >
                  <Link href={article.link} className="flex flex-col h-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E6E4DF]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Category Pill */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="px-3 py-1.5 rounded-full bg-white text-[#1A1A1A] text-[9px] font-black uppercase tracking-widest shadow-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-7 flex flex-col flex-grow">
                      <h3 className="text-[17px] font-bold text-[#1A1A1A] leading-snug font-heading tracking-tight mb-3 group-hover:text-[#E8C547] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[13px] text-[#686B6B] leading-relaxed mb-8 flex-grow">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between w-full mt-auto">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1A1A1A] group-hover:text-[#E8C547] transition-colors">
                          Read More <ArrowUpRight size={14} strokeWidth={2.5} />
                        </div>
                        <p className="text-[10px] font-medium text-[#686B6B] uppercase tracking-wider">{article.date}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
