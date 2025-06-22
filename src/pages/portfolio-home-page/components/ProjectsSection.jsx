import React, { useState, useEffect, useRef } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Testing",
      category: "automation",
      type: "Web Application",
      duration: "6 months",
      team: "5 members",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: `Comprehensive testing of a large-scale e-commerce platform handling 10,000+ daily transactions. Implemented end-to-end automation testing framework covering user registration, product catalog, shopping cart, payment processing, and order management functionalities.`,
      challenges: [
        "Complex payment gateway integrations requiring thorough API testing",
        "High-volume transaction processing performance validation",
        "Multi-browser and cross-device compatibility testing",
        "Integration with third-party services and APIs"
      ],
      solutions: [
        "Developed robust Selenium automation framework with Page Object Model",
        "Implemented comprehensive API testing suite using Postman and REST Assured",
        "Created performance testing scenarios using JMeter for load validation",
        "Established CI/CD pipeline with Jenkins for automated test execution"
      ],
      technologies: ["Selenium WebDriver", "TestNG", "Java", "REST Assured", "JMeter", "Jenkins", "MySQL"],
      results: [
        "Reduced testing cycle time by 65%",
        "Achieved 98% test coverage",
        "Identified and prevented 150+ critical bugs",
        "Improved overall system reliability by 40%"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Banking Application Security Testing",
      category: "security",
      type: "Financial Application",
      duration: "4 months",
      team: "3 members",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: `Security-focused testing of a core banking application handling sensitive financial data. Conducted comprehensive security testing including authentication, authorization, data encryption, and compliance validation with banking regulations.`,
      challenges: [
        "Stringent security requirements and compliance standards",
        "Complex user role and permission management",
        "Sensitive data handling and encryption validation",
        "Real-time transaction processing security"
      ],
      solutions: [
        "Implemented security testing protocols following OWASP guidelines",
        "Created automated security test scripts for vulnerability assessment",
        "Developed comprehensive test scenarios for authentication and authorization",
        "Established secure test data management practices"
      ],
      technologies: ["OWASP ZAP", "Burp Suite", "Selenium", "Java", "SQL", "Postman", "JIRA"],
      results: [
        "Identified and resolved 25+ security vulnerabilities",
        "Achieved 100% compliance with banking security standards",
        "Reduced security testing time by 50%",
        "Enhanced overall application security posture"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Mobile App Cross-Platform Testing",
      category: "mobile",
      type: "Mobile Application",
      duration: "3 months",
      team: "4 members",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      description: `Cross-platform testing of a social media mobile application for iOS and Android platforms. Focused on functionality, usability, performance, and compatibility testing across different devices and operating system versions.`,
      challenges: [
        "Multiple device configurations and screen sizes",
        "Platform-specific functionality differences",
        "Performance optimization across different hardware",
        "Real-time messaging and notification testing"
      ],
      solutions: [
        "Implemented Appium-based mobile automation framework",
        "Created device-specific test scenarios and configurations",
        "Developed performance testing protocols for mobile environments",
        "Established cloud-based testing infrastructure using AWS Device Farm"
      ],
      technologies: ["Appium", "Java", "TestNG", "AWS Device Farm", "Charles Proxy", "Firebase", "Git"],
      results: [
        "Tested across 20+ device configurations",
        "Reduced mobile testing cycle by 55%",
        "Improved app performance by 30%",
        "Achieved 95% crash-free user sessions"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "API Testing Framework Development",
      category: "api",
      type: "Testing Framework",
      duration: "2 months",
      team: "2 members",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      description: `Development of a comprehensive API testing framework for microservices architecture. Created reusable test components, data-driven testing capabilities, and automated reporting for REST and GraphQL APIs.`,
      challenges: [
        "Complex microservices interdependencies",
        "Dynamic API endpoint configurations",
        "Comprehensive test data management",
        "Real-time API performance monitoring"
      ],
      solutions: [
        "Built modular API testing framework using REST Assured",
        "Implemented data-driven testing with external data sources",
        "Created comprehensive API documentation and test reports",
        "Established continuous API monitoring and alerting"
      ],
      technologies: ["REST Assured", "Java", "TestNG", "Maven", "JSON", "Postman", "Jenkins"],
      results: [
        "Created reusable framework for 50+ APIs",
        "Reduced API testing effort by 70%",
        "Improved API reliability by 45%",
        "Established automated API regression testing"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Healthcare System Integration Testing",
      category: "integration",
      type: "Healthcare Application",
      duration: "5 months",
      team: "6 members",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      description: `Integration testing of a comprehensive healthcare management system connecting hospitals, clinics, and patient portals. Focused on data integrity, system interoperability, and compliance with healthcare regulations.`,
      challenges: [
        "Complex system integrations and data flows",
        "HIPAA compliance and patient data security",
        "Real-time data synchronization across systems",
        "Legacy system integration requirements"
      ],
      solutions: [
        "Developed comprehensive integration testing strategy",
        "Created automated data validation and integrity checks",
        "Implemented security testing protocols for healthcare compliance",
        "Established end-to-end testing scenarios for critical workflows"
      ],
      technologies: ["Selenium", "Java", "SQL Server", "HL7", "REST APIs", "SOAP", "TestNG"],
      results: [
        "Ensured 100% HIPAA compliance",
        "Validated integration of 15+ systems",
        "Reduced integration issues by 80%",
        "Improved system reliability and data accuracy"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Performance Testing Suite",
      category: "performance",
      type: "Performance Testing",
      duration: "3 months",
      team: "3 members",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: `Comprehensive performance testing suite for high-traffic web applications. Implemented load testing, stress testing, and performance monitoring to ensure optimal system performance under various load conditions.`,
      challenges: [
        "Simulating realistic user load patterns",
        "Identifying performance bottlenecks",
        "Scalability testing for future growth",
        "Real-time performance monitoring and alerting"
      ],
      solutions: [
        "Developed comprehensive performance testing framework using JMeter",
        "Created realistic load testing scenarios based on production data",
        "Implemented performance monitoring and reporting dashboards",
        "Established performance benchmarks and SLA validation"
      ],
      technologies: ["JMeter", "Grafana", "InfluxDB", "Java", "Jenkins", "AWS", "New Relic"],
      results: [
        "Improved application response time by 60%",
        "Validated system capacity for 10x traffic growth",
        "Identified and resolved 30+ performance bottlenecks",
        "Established automated performance regression testing"
      ],
      link: "#",
      github: "#"
    }
  ];

  const filterCategories = [
    { key: 'all', label: 'All Projects', icon: 'Grid' },
    { key: 'automation', label: 'Automation', icon: 'Bot' },
    { key: 'api', label: 'API Testing', icon: 'Link' },
    { key: 'mobile', label: 'Mobile', icon: 'Smartphone' },
    { key: 'security', label: 'Security', icon: 'Shield' },
    { key: 'performance', label: 'Performance', icon: 'Gauge' },
    { key: 'integration', label: 'Integration', icon: 'GitBranch' }
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

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading font-bold text-fluid-3xl mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-fluid-lg font-body max-w-2xl mx-auto">
            Showcase of comprehensive testing projects demonstrating expertise across various domains and technologies
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-semibold text-fluid-sm transition-all duration-200 hover-scale ${
                activeFilter === category.key
                  ? 'bg-primary text-white shadow-elevation-2'
                  : 'glassmorphism text-text-secondary hover:text-text-primary hover:bg-white/10'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glassmorphism rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover-scale cursor-pointer ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-fluid-xs font-body font-semibold">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-text-primary font-heading font-bold text-fluid-lg mb-2">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-fluid-sm font-body leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center justify-between text-text-secondary text-fluid-xs mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/20 text-primary rounded text-fluid-xs font-body"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-text-secondary rounded text-fluid-xs font-body">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <button className="text-primary hover:text-primary/80 font-body font-semibold text-fluid-sm transition-colors duration-200 flex items-center space-x-1">
                    <span>View Details</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 glassmorphism rounded-lg hover:bg-white/10 transition-all duration-200">
                      <Icon name="ExternalLink" size={16} className="text-text-secondary hover:text-text-primary" />
                    </button>
                    <button className="p-2 glassmorphism rounded-lg hover:bg-white/10 transition-all duration-200">
                      <Icon name="Github" size={16} className="text-text-secondary hover:text-text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-1001 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-background/90 backdrop-blur-sm" onClick={closeProjectModal}></div>
            <div className="relative bg-surface rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elevation-3">
              {/* Modal Header */}
              <div className="sticky top-0 bg-surface border-b border-white/10 p-6 flex items-center justify-between">
                <h3 className="text-text-primary font-heading font-bold text-fluid-xl">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeProjectModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <Icon name="X" size={24} className="text-text-secondary hover:text-text-primary" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Project Image */}
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <h4 className="text-text-primary font-heading font-bold text-fluid-lg mb-3">
                    Project Overview
                  </h4>
                  <p className="text-text-secondary text-fluid-base font-body leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-text-primary font-heading font-bold text-fluid-lg mb-4 flex items-center space-x-2">
                      <Icon name="AlertTriangle" size={20} className="text-warning" />
                      <span>Challenges</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-3 text-text-secondary text-fluid-sm font-body">
                          <Icon name="ArrowRight" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-text-primary font-heading font-bold text-fluid-lg mb-4 flex items-center space-x-2">
                      <Icon name="CheckCircle" size={20} className="text-success" />
                      <span>Solutions</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-3 text-text-secondary text-fluid-sm font-body">
                          <Icon name="ArrowRight" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-text-primary font-heading font-bold text-fluid-lg mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-primary/20 text-primary rounded-lg text-fluid-sm font-body font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-text-primary font-heading font-bold text-fluid-lg mb-4 flex items-center space-x-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    <span>Results & Impact</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start space-x-3 text-text-secondary text-fluid-sm font-body">
                        <Icon name="Star" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;