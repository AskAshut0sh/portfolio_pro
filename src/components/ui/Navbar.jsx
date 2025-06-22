import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import { useTheme } from 'components/ThemeContext'; // Add this import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Add this line

  const navigationItems = [
    { label: 'About', anchor: 'about', icon: 'User' },
    { label: 'Skills', anchor: 'skills', icon: 'Code' },
    { label: 'Experience', anchor: 'experience', icon: 'Briefcase' },
    { label: 'Projects', anchor: 'projects', icon: 'FolderOpen' },
    { label: 'Contact', anchor: 'contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.anchor);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleCVDownload = () => {
    // Create a temporary link element for CV download
    const link = document.createElement('a');
    link.href = '/assets/cv/ASHUTOSH_SWAIN_CV.pdf';
    link.download = 'ASHUTOSH_SWAIN.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elevation-2' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('about')}
                className="text-text-primary font-heading font-bold text-fluid-lg hover:text-primary animation-smooth"
              >
                QA Portfolio
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => handleNavClick(item.anchor)}
                    className={`px-3 py-2 text-fluid-sm font-body font-normal transition-all duration-200 hover:text-primary hover-scale ${
                      activeSection === item.anchor
                        ? 'text-primary border-b-2 border-primary' :'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg bg-surface border border-white/10 hover:bg-primary/10 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <Icon name={theme === "dark" ? "Sun" : "Moon"} size={20} />
            </button>

            {/* CV Download Button */}
            <div className="hidden md:block">
              <button
                onClick={handleCVDownload}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-body font-semibold text-fluid-sm transition-all duration-200 hover-scale shadow-elevation-1 hover:shadow-elevation-2"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Download" size={16} />
                  <span>Download CV</span>
                </div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-primary hover:text-primary p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-1001 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-surface shadow-elevation-3 animate-slide-down">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-text-primary font-heading font-bold text-fluid-lg">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-text-primary hover:text-primary p-2 rounded-md transition-colors duration-200"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <button
                  key={item.anchor}
                  onClick={() => handleNavClick(item.anchor)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-white/5 hover-scale ${
                    activeSection === item.anchor
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-text-secondary hover:text-text-primary'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-body font-normal text-fluid-base">{item.label}</span>
                </button>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={handleCVDownload}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-body font-semibold text-fluid-base transition-all duration-200 hover-scale shadow-elevation-1 hover:shadow-elevation-2"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Download" size={20} />
                    <span>Download CV</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;