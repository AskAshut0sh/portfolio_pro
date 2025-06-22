import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Software Quality Engineer", 
    "QA Analyst",
    "Test Automation Expert"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const handleScrollToWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-accent font-body font-semibold text-fluid-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-text-primary font-heading font-bold text-fluid-4xl leading-tight">
                Ashutosh Swain
              </h1>
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="text-primary font-body font-semibold text-fluid-xl">
                  {roles[currentRole]}
                </p>
              </div>
              <p className="text-text-secondary text-fluid-base">
                at Infosys Limited
              </p>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4">
              <p className="text-text-primary text-fluid-lg font-body leading-relaxed max-w-2xl">
                Passionate about delivering quality software through comprehensive testing strategies, 
                automation frameworks, and continuous improvement practices.
              </p>
              <p className="text-text-secondary text-fluid-base font-body leading-relaxed max-w-2xl">
                Specializing in Copado Robotic Testing, Selenium automation, API testing, and Agile methodologies 
                to ensure robust, scalable, and user-friendly applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToWork}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-body font-semibold text-fluid-base transition-all duration-200 hover-scale shadow-elevation-2 hover:shadow-elevation-3 inline-flex items-center justify-center space-x-2"
              >
                <Icon name="FolderOpen" size={20} />
                <span>View My Work</span>
              </button>
              
              <button
                onClick={handleScrollToContact}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-body font-semibold text-fluid-base transition-all duration-200 hover-scale inline-flex items-center justify-center space-x-2"
              >
                <Icon name="Mail" size={20} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="text-primary font-heading font-bold text-fluid-xl">3+</div>
                <div className="text-text-secondary text-fluid-sm font-body">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-primary font-heading font-bold text-fluid-xl">50+</div>
                <div className="text-text-secondary text-fluid-sm font-body">Projects Tested</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-primary font-heading font-bold text-fluid-xl">99%</div>
                <div className="text-text-secondary text-fluid-sm font-body">Bug Detection Rate</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl -z-20"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elevation-3">
                <Image
                  src="\assets\images\passphoto.jpg"
                  alt="Ashutosh Swain - QA Engineer"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with Tech Icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex justify-center space-x-4">
                      <button
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-lg transition hover:bg-primary/20"
                        onClick={handleScrollToWork}
                        title="View Projects"
                      >
                        <Icon name="TestTube" size={20} className="text-primary" />
                      </button>
                      <a
                        href="https://github.com/AskAshut0sh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-lg transition hover:bg-accent/20"
                        title="GitHub"
                      >
                        <Icon name="Code" size={20} className="text-accent" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ashutosh-swain-283b75200/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-lg transition hover:bg-success/20"
                        title="LinkedIn"
                      >
                        <Icon name="CheckCircle" size={20} className="text-success" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-text-secondary text-fluid-xs font-body">Scroll to explore</span>
            <Icon name="ChevronDown" size={24} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;