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
    <section className="py-24 bg-card-alt border-t border-border-custom overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted mb-4 uppercase tracking-[0.2em]"
          >
            <BookOpen size={14} className="text-foreground" />
            Insights & News
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight font-heading leading-tight"
          >
            Related <span className="text-muted">Articles</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link href="https://www.zonettech.com/blogs" className="text-sm font-bold border-b border-foreground pb-1 hover:opacity-70 transition-opacity flex items-center gap-1">
            Read all articles <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        {/* Horizontal Scroll Snap Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="snap-start min-w-[300px] md:min-w-[400px] w-[85vw] md:w-[400px] flex-shrink-0 group relative rounded-[24px] overflow-hidden bg-card border border-border-custom cursor-pointer"
            >
              <Link href={article.link}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between items-start">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug font-heading group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="mt-6 flex items-center justify-between w-full">
                    <p className="text-sm font-bold text-muted">{article.readTime}</p>
                    <div className="w-10 h-10 rounded-full border border-border-custom flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                      <ArrowUpRight size={18} />
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
