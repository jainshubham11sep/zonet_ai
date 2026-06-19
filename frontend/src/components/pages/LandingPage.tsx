'use client';

import { motion, useScroll, useTransform } from 'motion/react'
import Hero from '@/components/sections/landing/Hero';
import TrustedBy from '@/components/sections/landing/TrustedBy';
import Clients from '@/components/sections/landing/Clients';
import ProjectShowcase from '@/components/sections/landing/ProjectsShowcase';
import Partners from '@/components/sections/landing/Partners';
import Services from '@/components/sections/landing/Services';
import ProjectsGallery from '@/components/sections/landing/ProjectsGallery';
import AIWhatWeDoTabs from '@/components/sections/landing/AIWhatWeDoTabs';
import Timelines from '@/components/sections/landing/Timelines';
import DataDrivenStats from '@/components/sections/landing/DataDrivenStats';
import VideoShowcase from '@/components/sections/landing/VideoShowcase';
import ContactForm from '@/components/sections/landing/ContactForm';
import RelatedArticles from '@/components/sections/landing/RelatedArticles';
import FAQs from '@/components/sections/landing/FAQs';
import Testimonials from '@/components/sections/landing/Testimonials';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="relative bg-[#F7F6F3]">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-progress-bar z-100 origin-left"
        style={{ scaleX }}
      />

      <Hero />

      <TrustedBy />

      <Clients />
      <ProjectShowcase />
      <Partners />
      <Services />
      <ProjectsGallery />
      <AIWhatWeDoTabs />
      <Timelines />
      <DataDrivenStats />
      <VideoShowcase />
      <ContactForm />
      <Testimonials />
      <RelatedArticles />
      <FAQs />
    </div>
  )
}

export default Homepage