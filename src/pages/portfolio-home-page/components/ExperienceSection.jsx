import React, { useState, useEffect, useRef } from 'react';
import Icon from 'components/AppIcon';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(0);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "Infosys Limited",
      role: "Senior Systems Engineer",
      duration: "Dec 2022 - Present",
      location: "Bhubaneswar, India",
      type: "Full-time",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      description: `Leading quality assurance initiatives for enterprise-level applications with focus on automation testing and continuous integration. Responsible for designing and implementing comprehensive testing strategies that ensure high-quality software delivery.`,
      responsibilities: [
        "Design and implement automated test frameworks using Copado Robotic Testing and Selenium WebDriver",
        "Lead API testing initiatives using Postman and REST Assured for microservices architecture",
        "Collaborate with cross-functional teams in Agile/Scrum environment to ensure quality deliverables",
        "Mentor junior QA engineers and conduct code reviews for test automation scripts",
        "Develop and maintain CI/CD pipelines using Jenkins for automated testing workflows",
        "Create comprehensive test documentation and quality metrics reporting",
        "Perform risk assessment and test planning for complex software releases",
        "Conduct performance testing and load testing for critical applications"
      ],
      achievements: [
        "Reduced testing cycle time by 60% through automation framework implementation",
        "Achieved 99% bug detection rate through comprehensive testing strategies",
        "Led successful migration of legacy testing processes to modern automation tools",
        "Trained and mentored 8+ junior QA engineers on best practices"
      ],
      technologies: ["Copado Robotic Testing", "Selenium", "TestNG", "Java", "Jenkins", "JIRA", "SQL", "Postman"]
    }
  ];

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

  const toggleExpanded = (index) => {
    setExpandedExperience(expandedExperience === index ? -1 : index);
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading font-bold text-fluid-3xl mb-4">
            Professional Experience
          </h2>
          <p className="text-text-secondary text-fluid-lg font-body max-w-2xl mx-auto">
            My journey in quality assurance and software testing across different organizations and projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative mb-12 ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

              {/* Experience Card */}
              <div className="md:ml-20 glassmorphism rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover-scale">
                
                {/* Card Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-text-primary font-heading font-bold text-fluid-xl">
                          {experience.role}
                        </h3>
                        <p className="text-primary font-body font-semibold text-fluid-base">
                          {experience.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-text-secondary text-fluid-sm">
                          <div className="flex items-center space-x-1">
                            <Icon name="Calendar" size={16} />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={16} />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Briefcase" size={16} />
                            <span>{experience.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 self-start md:self-center"
                    >
                      <span className="text-fluid-sm font-body font-semibold">
                        {expandedExperience === index ? 'Show Less' : 'Show More'}
                      </span>
                      <Icon 
                        name={expandedExperience === index ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                      />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-text-secondary text-fluid-base font-body leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-text-primary font-heading font-bold text-fluid-base mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-fluid-xs font-body font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedExperience === index && (
                    <div className="space-y-6 animate-fade-in">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-text-primary font-heading font-bold text-fluid-base mb-4 flex items-center space-x-2">
                          <Icon name="CheckSquare" size={20} className="text-primary" />
                          <span>Key Responsibilities</span>
                        </h4>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start space-x-3 text-text-secondary text-fluid-sm font-body leading-relaxed"
                            >
                              <Icon name="ArrowRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-text-primary font-heading font-bold text-fluid-base mb-4 flex items-center space-x-2">
                          <Icon name="Award" size={20} className="text-success" />
                          <span>Key Achievements</span>
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start space-x-3 text-text-secondary text-fluid-sm font-body leading-relaxed"
                            >
                              <Icon name="Star" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center glassmorphism p-6 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
              <Icon name="Calendar" size={32} className="text-primary" />
            </div>
            <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-2">
              3+ Years
            </h3>
            <p className="text-text-secondary text-fluid-base font-body">
              Professional QA Experience
            </p>
          </div>
          
          <div className="text-center glassmorphism p-6 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-4">
              <Icon name="Building" size={32} className="text-success" />
            </div>
            <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-2">
              1 Company - Various Clients
            </h3>
            <p className="text-text-secondary text-fluid-base font-body">
              Diverse Industry Experience
            </p>
          </div>
          
          <div className="text-center glassmorphism p-6 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
              <Icon name="TrendingUp" size={32} className="text-accent" />
            </div>
            <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-2">
              50+ Projects
            </h3>
            <p className="text-text-secondary text-fluid-base font-body">
              Successfully Delivered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;