import React, { useState, useEffect } from 'react';
import Navbar from 'components/ui/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const PortfolioHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary text-fluid-base">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="relative">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about" className="py-5 lg:py-10">
          <AboutSection />
        </section>
        
        <section id="skills" className="py-16 lg:py-24 bg-surface">
          <SkillsSection />
        </section>
        
        <section id="experience" className="py-16 lg:py-24">
          <ExperienceSection />
        </section>
        
        <section id="projects" className="py-16 lg:py-24 bg-surface">
          <ProjectsSection />
        </section>
        
        <section id="contact" className="py-16 lg:py-24">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioHomePage;