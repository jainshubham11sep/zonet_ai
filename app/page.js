'use client';

import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import ClientsGoGrowth from "@/components/ClientsGoGrowth";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import CreativesGrid from "@/components/CreativesGrid";
import AIWhatWeDoTabs from "@/components/AIWhatWeDoTabs";
import DataDrivenStats from "@/components/DataDrivenStats";
import VideoShowcase from "@/components/VideoShowcase";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import RelatedArticles from "@/components/RelatedArticles";
import FAQ from "@/components/FAQ";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-background">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-progress-bar z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. GoGrowth Style Clients Section */}
      <ClientsGoGrowth />


      {/* 3. Case Studies */}
      <ProjectShowcase />

      {/* 4. Our Services */}
      <ServicesGrid />

      {/* 5. Project Gallery Animation */}
      <CreativesGrid />

      {/* 6. What We Do in AI Web App — Three Tabs */}
      <AIWhatWeDoTabs />

      {/* 7. Data Driven Numbers */}
      <DataDrivenStats />

      {/* 8. Zonet Videos */}
      <VideoShowcase />

      {/* 9. Contact Us */}
      <ContactForm />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. Related Articles */}
      <RelatedArticles />

      {/* 12. FAQ */}
      <FAQ />

      {/* Footer is in layout.js */}
    </div>
  );
}
