'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const articles = [
  {
    title: "From Healthcare to Finance: How AI is Revolutionizing",
    readTime: "5 min read",
    image: "/images/zonet/article-1.jpg",
    link: "https://www.zonettech.com/blogs/AI-revolutionizing",
    category: "AI"
  },
  {
    title: "Best AI Trends To Follow in 2024",
    readTime: "4 min read",
    image: "/images/zonet/article-2.jpg",
    link: "https://www.zonettech.com/blogs/AI-Trends-2024",
    category: "Technology"
  },
  {
    title: "Best Java Frameworks",
    readTime: "6 min read",
    image: "/images/zonet/article-3.jpg",
    link: "https://www.zonettech.com/blogs/java-frameworks",
    category: "Development"
  },
  {
    title: "Why You Should Consider Redesigning your Website",
    readTime: "3 min read",
    image: "/images/zonet/article-4.jpg",
    link: "https://www.zonettech.com/blogs/consider-redesigning-website",
    category: "Design"
  },
  {
    title: "Why is UX Design Important for Business",
    readTime: "4 min read",
    image: "/images/zonet/article-5.jpg",
    link: "https://www.zonettech.com/blogs/ux-important-for-business",
    category: "Business"
  }
];

export default function RelatedArticles() {
  return (
    <section className="section-padding bg-[#F7F6F3] border-t border-border-custom overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Insights & News
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-foreground tracking-tighter font-heading leading-[1]"
          >
            Related <span className="text-muted">Articles</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link href="https://www.zonettech.com/blogs" className="text-xs font-black uppercase tracking-widest text-accent border-b-2 border-accent/20 pb-1.5 hover:text-foreground hover:border-foreground transition-all flex items-center gap-2">
            Read all articles <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        {/* Horizontal Scroll Snap Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 scrollbar-hide">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="snap-start min-w-[320px] md:min-w-[420px] w-[85vw] md:w-[420px] flex-shrink-0 group relative rounded-[32px] overflow-hidden bg-card backdrop-blur-xl border border-border-custom hover:border-accent/40 transition-all duration-500 shadow-sm"
            >
              <Link href={article.link}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/10 text-[9px] font-black uppercase tracking-widest shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-between items-start">
                  <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight font-heading tracking-tight transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>
                  <div className="mt-8 flex items-center justify-between w-full">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">{article.readTime}</p>
                    <div className="w-12 h-12 rounded-2xl border border-border-custom bg-card flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
