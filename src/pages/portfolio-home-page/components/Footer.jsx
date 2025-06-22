import React, { useEffect, useState } from 'react';
import Icon from 'components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitCount, setVisitCount] = useState(0);

  const footerLinks = {
    professional: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' }
    ],
    social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ashutosh-swain-283b75200/', icon: 'Linkedin' },
      { name: 'GitHub', href: 'https://github.com/AskAshut0sh', icon: 'Github' },
      { name: 'Twitter', href: 'https://x.com/AskAshut0sh', icon: 'Twitter' },
      { name: 'Email', href: 'mailto:swainashutosh123@gmail.com', icon: 'Mail' }
    ],
    contact: [
      { name: 'swainashutosh123@gmail.com', href: 'mailto:swainashutosh123@gmail.com', icon: 'Mail' },
      { name: '+91 77879 69350', href: 'tel:+917787969350', icon: 'Phone' },
      { name: 'Bhubaneswar, India', href: '#', icon: 'MapPin' }
    ]
  };

  useEffect(() => {
    const count = parseInt(localStorage.getItem("visitCount") || "0", 10) + 1;
    localStorage.setItem("visitCount", count);
    setVisitCount(count);
  }, []);

  const handleScrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv/ASHUTOSH_SWAIN_CV.pdf';
    link.download = 'ASHUTOSH_SWAIN.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-2">
                Ashutosh Swain
              </h3>
              <p className="text-primary font-body font-semibold text-fluid-base mb-2">
                Software Quality Engineer
              </p>
              <p className="text-text-secondary text-fluid-sm font-body">
                Infosys Limited
              </p>
            </div>
            
            <p className="text-text-secondary text-fluid-sm font-body leading-relaxed mb-6">
              Passionate QA Engineer specializing in automation testing, quality assurance, and delivering exceptional software experiences.
            </p>
            
            <button
              onClick={handleCVDownload}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-body font-semibold text-fluid-sm transition-all duration-200 hover-scale shadow-elevation-1 hover:shadow-elevation-2 inline-flex items-center space-x-2"
            >
              <Icon name="Download" size={16} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-heading font-bold text-fluid-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.professional.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-fluid-sm font-body"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-primary font-heading font-bold text-fluid-base mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact) => (
                <li key={contact.name}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-200 text-fluid-sm font-body"
                  >
                    <Icon name={contact.icon} size={16} />
                    <span>{contact.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-text-primary font-heading font-bold text-fluid-base mb-4">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-lg flex items-center justify-center transition-all duration-200 hover-scale group"
                  aria-label={social.name}
                >
                  <Icon 
                    name={social.icon} 
                    size={18} 
                    className="text-text-secondary group-hover:text-primary transition-colors duration-200" 
                  />
                </a>
              ))}
            </div>
            <p className="text-text-secondary text-fluid-xs font-body">
              Follow for QA insights, testing tips, and career updates
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-text-secondary text-fluid-sm font-body">
              <p>
                © {currentYear} Ashutosh Swain. All rights reserved.
              </p>
              <p className="mt-1 text-base font-bold">
                <span className="mr-1">Visits:</span>
                <span className="font-extrabold text-xl">{visitCount}</span>
              </p>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-text-secondary text-fluid-xs font-body">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={14} />
                <span>Based in Bhubaneswar, India</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-primary/20 hover:bg-primary/30 border border-primary/30 hover:border-primary/50 rounded-full flex items-center justify-center transition-all duration-200 hover-scale group"
            aria-label="Back to top"
          >
            <Icon 
              name="ChevronUp" 
              size={20} 
              className="text-primary group-hover:text-primary/80 transition-colors duration-200" 
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;