'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface CaseStudyStat {
  value: string;
  label: string;
  star?: boolean;
}

export interface CaseStudyProject {
  tag: string;
  name: string;
  desc: string;
  stats?: CaseStudyStat[];
  href: string;
  image: string;
}

interface CaseStudiesSectionProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  viewAllHref?: string;
  projects: CaseStudyProject[];
  className?: string;
}

export default function CaseStudiesSection({
  eyebrow = 'Case Studies',
  title,
  titleHighlight,
  viewAllHref = '/case-studies',
  projects,
  className = '',
}: CaseStudiesSectionProps) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-[1140px] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase text-[#E8C547] bg-[#E8C547]/10 px-3 py-1.5 rounded-full mb-4">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] tracking-tight leading-tight">
              {title}
              {titleHighlight && (
                <> <em className="text-[#E8C547] not-italic">{titleHighlight}</em></>
              )}
            </h2>
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-bold text-[#E8C547] hover:text-[#d4b33c] transition-colors whitespace-nowrap group mb-1"
            >
              View All Projects
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={project.href} className="group block h-full">
                <article className="h-full rounded-[24px] border border-[#E6E4DF] overflow-hidden bg-white hover:shadow-[0_24px_64px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300">

                  {/* Visual area */}
                  <div className="relative h-[280px] sm:h-[320px] overflow-hidden bg-[#F2EFE8]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-2 left-3 z-10">
                      <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] text-[10px] font-bold tracking-[0.1em] uppercase shadow-sm">
                        {project.tag}
                      </span>
                    </div>

                    {/* Arrow on hover */}
                    <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowUpRight size={15} className="text-[#1A1A1A]" />
                    </div>
                  </div>

                  {/* Info area */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-2 tracking-tight group-hover:text-[#E8C547] transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-[#686B6B] leading-relaxed mb-6 line-clamp-2">
                      {project.desc}
                    </p>

                    {project.stats && project.stats.length > 0 && (
                      <div className="flex flex-wrap gap-6 sm:gap-8 pt-5 border-t border-[#E6E4DF]">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="flex flex-col gap-1">
                            <span className="text-lg sm:text-xl font-bold text-[#1A1A1A] flex items-center gap-1 leading-none">
                              {stat.value}
                              {stat.star && (
                                <span className="text-[#E8C547] text-sm leading-none">★</span>
                              )}
                            </span>
                            <span className="text-[9px] tracking-[0.06em] uppercase text-[#999] font-semibold leading-tight max-w-[90px]">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View All" */}
        {viewAllHref && (
          <div className="sm:hidden mt-8 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#E8C547] hover:text-[#d4b33c] transition-colors"
            >
              View All Projects <ArrowUpRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
