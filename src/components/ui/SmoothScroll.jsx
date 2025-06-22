import { useEffect } from 'react';

const useSmoothScroll = (options = {}) => {
  const {
    duration = 800,
    easing = 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    offset = 80
  } = options;

  const scrollToElement = (targetId, customOffset = offset) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop - customOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Cubic bezier easing function
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToTop = () => {
    scrollToElement('top', 0);
  };

  return { scrollToElement, scrollToTop };
};

const SmoothScroll = ({ children, options }) => {
  const smoothScroll = useSmoothScroll(options);
  
  return children(smoothScroll);
};

// Hook for handling anchor links
const useAnchorLinks = (offset = 80) => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const targetPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [offset]);
};

export { useSmoothScroll, useAnchorLinks };
export default SmoothScroll;