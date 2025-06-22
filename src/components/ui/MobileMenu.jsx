import React, { useEffect } from 'react';
import Icon from '../AppIcon';

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  navigationItems, 
  activeSection, 
  onNavClick, 
  onCVDownload 
}) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavClick = (anchor) => {
    onNavClick(anchor);
    onClose();
  };

  const handleCVDownload = () => {
    onCVDownload();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-1001 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-surface shadow-elevation-3 animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-text-primary font-heading font-bold text-fluid-lg">
            Navigation
          </span>
          <button
            onClick={onClose}
            className="text-text-primary hover:text-primary p-2 rounded-md transition-colors duration-200 hover:bg-white/5"
            aria-label="Close menu"
          >
            <Icon name="X" size={24} />
          </button>
        </div>
        
        {/* Navigation Items */}
        <div className="px-4 py-6 space-y-2">
          {navigationItems.map((item, index) => (
            <button
              key={item.anchor}
              onClick={() => handleNavClick(item.anchor)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-white/5 hover-scale group ${
                activeSection === item.anchor
                  ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-text-secondary hover:text-text-primary'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: 'slideUp 0.3s ease-out forwards'
              }}
            >
              <div className={`transition-colors duration-200 ${
                activeSection === item.anchor 
                  ? 'text-primary' :'text-text-secondary group-hover:text-text-primary'
              }`}>
                <Icon name={item.icon} size={20} />
              </div>
              <span className="font-body font-normal text-fluid-base">
                {item.label}
              </span>
              {activeSection === item.anchor && (
                <div className="ml-auto">
                  <Icon name="ChevronRight" size={16} className="text-primary" />
                </div>
              )}
            </button>
          ))}
        </div>
        
        {/* CV Download Section */}
        <div className="px-4 pb-6">
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={handleCVDownload}
              className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-body font-semibold text-fluid-base transition-all duration-200 hover-scale shadow-elevation-1 hover:shadow-elevation-2 group"
            >
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-background/50">
          <p className="text-text-secondary text-fluid-xs text-center font-caption">
            QA Engineer Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;