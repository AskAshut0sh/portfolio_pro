import React, { useState, useEffect, useRef } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const personalInfo = {
    name: "Ashutosh Swain",
    role: "Software Quality Engineer",
    company: "Infosys Limited",
    location: "Bhubaneswar, India",
    experience: "3+ Years",
    email: "swainashutosh123@gmail.com",
    phone: "+91 77879 69350",
    biography: `I'm a dedicated QA Engineer with over 3 years of experience in software testing and quality assurance. My journey in technology began with a passion for ensuring software reliability and user satisfaction. Currently working at Infosys Limited, I specialize in automation testing, API testing, and implementing robust testing frameworks.

My expertise spans across various testing methodologies including functional testing, regression testing, performance testing, and test automation using cutting-edge tools and frameworks. I'm particularly skilled in Copado Robotic Testing, Selenium WebDriver, TestNG, and API testing tools.

What drives me is the pursuit of excellence in software quality and the satisfaction of delivering bug-free, high-performance applications that provide exceptional user experiences. I believe in continuous learning and staying updated with the latest testing trends and technologies.`,
    highlights: [
      {
        icon: "Award",
        title: "Certified Professional",
        description: "SDET Certified Tester with multiple automation certifications"
      },
      {
        icon: "Target",
        title: "Quality Focused",
        description: "99% bug detection rate with comprehensive testing strategies"
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description: "Strong experience in Agile/Scrum methodologies and cross-functional teams"
      },
      {
        icon: "TrendingUp",
        title: "Continuous Improvement",
        description: "Passionate about optimizing testing processes and implementing best practices"
      }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading font-bold text-fluid-3xl mb-4">
            About Me
          </h2>
          <p className="text-text-secondary text-fluid-lg font-body max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives my passion for quality assurance
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-elevation-3 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="\assets\images\passphoto.jpg"
                  alt="Ashutosh Swain - Professional Photo"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Info Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6">
                  <div className="text-center">
                    <h3 className="text-text-primary font-heading font-bold text-fluid-lg mb-1">
                      {personalInfo.name}
                    </h3>
                    <p className="text-primary font-body font-semibold text-fluid-base mb-2">
                      {personalInfo.role}
                    </p>
                    <p className="text-text-secondary text-fluid-sm font-body">
                      {personalInfo.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            
            {/* Personal Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glassmorphism p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <div>
                    <p className="text-text-secondary text-fluid-xs font-body">Location</p>
                    <p className="text-text-primary text-fluid-sm font-body font-semibold">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <div>
                    <p className="text-text-secondary text-fluid-xs font-body">Experience</p>
                    <p className="text-text-primary text-fluid-sm font-body font-semibold">
                      {personalInfo.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4">
              <h3 className="text-text-primary font-heading font-bold text-fluid-xl">
                My Story
              </h3>
              <div className="prose prose-lg max-w-none text-text-secondary font-body text-fluid-base leading-relaxed">
                <p className="mb-4">{personalInfo.biography}</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 glassmorphism p-4 rounded-lg hover:bg-white/10 transition-all duration-200 hover-scale"
              >
                <Icon name="Mail" size={20} className="text-primary" />
                <div>
                  <p className="text-text-secondary text-fluid-xs font-body">Email</p>
                  <p className="text-text-primary text-fluid-sm font-body font-semibold">
                    {personalInfo.email}
                  </p>
                </div>
              </a>
              
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-3 glassmorphism p-4 rounded-lg hover:bg-white/10 transition-all duration-200 hover-scale"
              >
                <Icon name="Phone" size={20} className="text-primary" />
                <div>
                  <p className="text-text-secondary text-fluid-xs font-body">Phone</p>
                  <p className="text-text-primary text-fluid-sm font-body font-semibold">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.highlights.map((highlight, index) => (
            <div
              key={index}
              className={`glassmorphism p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 hover-scale ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4">
                <Icon name={highlight.icon} size={24} className="text-primary" />
              </div>
              <h4 className="text-text-primary font-heading font-bold text-fluid-base mb-2">
                {highlight.title}
              </h4>
              <p className="text-text-secondary text-fluid-sm font-body leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;