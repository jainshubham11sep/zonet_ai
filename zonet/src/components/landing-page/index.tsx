'use client';

import { motion, useScroll, useTransform } from 'motion/react'
import Hero from './Hero';
import TrustedBy from './TrustedBy';
import Clients from './Clients';
import ProjectShowcase from './ProjectsShowcase';
import Partners from './Partners';
import Services from './Services';
import ProjectsGallery from './ProjectsGallery';
import AIWhatWeDoTabs from './AIWhatWeDoTabs';
import Timelines from './Timelines';
import DataDrivenStats from './DataDrivenStats';
import VideoShowcase from './VideoShowcase';
import ContactForm from './ContactForm';
import RelatedArticles from './RelatedArticles';
import FAQs from './FAQs';
import Testimonials from './Testimonials';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="relative bg-[#F7F6F3] overflow-x-clip">
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