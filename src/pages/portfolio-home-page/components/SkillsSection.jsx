import React, { useState, useEffect, useRef } from 'react';
import Icon from 'components/AppIcon';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('automation');
  const sectionRef = useRef(null);

  const skillCategories = {
    automation: {
      title: "Test Automation",
      icon: "Bot",
      skills: [
        { name: "Copado Robotic Testing", level: 95, icon: "Zap", description: "Advanced automation framework for Salesforce testing" },
        { name: "Selenium WebDriver", level: 90, icon: "Globe", description: "Web application automation testing" },
        { name: "TestNG", level: 88, icon: "CheckSquare", description: "Testing framework for Java applications" },
        { name: "Cucumber BDD", level: 85, icon: "FileText", description: "Behavior-driven development testing" },
        { name: "Jenkins CI/CD", level: 82, icon: "GitBranch", description: "Continuous integration and deployment" },
        { name: "Maven", level: 80, icon: "Package", description: "Build automation and dependency management" }
      ]
    },
    testing: {
      title: "Testing Methodologies",
      icon: "TestTube",
      skills: [
        { name: "API Testing", level: 92, icon: "Link", description: "RESTful and SOAP API validation" },
        { name: "Functional Testing", level: 95, icon: "CheckCircle", description: "End-to-end functionality validation" },
        { name: "Regression Testing", level: 90, icon: "RotateCcw", description: "Ensuring existing functionality works" },
        { name: "Performance Testing", level: 78, icon: "Gauge", description: "Load and stress testing" },
        { name: "Database Testing", level: 85, icon: "Database", description: "SQL queries and data validation" },
        { name: "Mobile Testing", level: 75, icon: "Smartphone", description: "iOS and Android app testing" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: "Wrench",
      skills: [
        { name: "Java", level: 88, icon: "Coffee", description: "Primary programming language" },
        { name: "SQL", level: 85, icon: "Database", description: "Database querying and management" },
        { name: "Git", level: 90, icon: "GitBranch", description: "Version control and collaboration" },
        { name: "JIRA", level: 92, icon: "Bug", description: "Issue tracking and project management" },
        { name: "Postman", level: 88, icon: "Send", description: "API testing and documentation" },
        { name: "Docker", level: 70, icon: "Container", description: "Containerization for testing environments" }
      ]
    },
    methodologies: {
      title: "Methodologies",
      icon: "Users",
      skills: [
        { name: "Agile/Scrum", level: 95, icon: "Repeat", description: "Iterative development methodology" },
        { name: "Test Planning", level: 92, icon: "FileText", description: "Comprehensive test strategy design" },
        { name: "Risk Assessment", level: 88, icon: "AlertTriangle", description: "Identifying and mitigating testing risks" },
        { name: "Quality Metrics", level: 85, icon: "BarChart", description: "Measuring and reporting quality indicators" },
        { name: "Code Review", level: 80, icon: "Eye", description: "Static code analysis and review" },
        { name: "Documentation", level: 90, icon: "BookOpen", description: "Test cases and technical documentation" }
      ]
    }
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

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading font-bold text-fluid-3xl mb-4">
            Technical Skills
          </h2>
          <p className="text-text-secondary text-fluid-lg font-body max-w-2xl mx-auto">
            Comprehensive expertise across testing frameworks, automation tools, and quality assurance methodologies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-body font-semibold text-fluid-base transition-all duration-200 hover-scale ${
                activeCategory === key
                  ? 'bg-primary text-white shadow-elevation-2'
                  : 'glassmorphism text-text-secondary hover:text-text-primary hover:bg-white/10'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glassmorphism p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover-scale ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg">
                    <Icon name={skill.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-heading font-bold text-fluid-base">
                      {skill.name}
                    </h3>
                    <p className="text-text-secondary text-fluid-xs font-body">
                      {skill.level}% Proficiency
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  ></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-fluid-sm font-body leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
              <Icon name="Award" size={32} className="text-primary" />
            </div>
            <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-2">
              15+ Tools
            </h3>
            <p className="text-text-secondary text-fluid-base font-body">
              Proficient in various testing and automation tools
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-4">
              <Icon name="Target" size={32} className="text-success" />
            </div>
            <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-2">
              3+ Years
            </h3>
            <p className="text-text-secondary text-fluid-base font-body">
              Hands-on experience in quality assurance
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
              <Icon name="TrendingUp" size={32} className="text-accent" />
            </div>
            <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-2">
              Continuous Learning
            </h3>
            <p className="text-text-secondary text-fluid-base font-body">
              Always updating skills with latest technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;