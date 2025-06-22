import { useEffect, useState } from 'react';

const useScrollSpy = (sectionIds, options = {}) => {
  const [activeSection, setActiveSection] = useState('');
  
  const {
    offset = 100,
    threshold = 0.3
  } = options;

  useEffect(() => {
    const observers = [];
    
    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -${100 - (threshold * 100)}% 0px`,
      threshold: threshold
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, offset, threshold]);

  return activeSection;
};

const ScrollSpy = ({ children, sectionIds, options }) => {
  const activeSection = useScrollSpy(sectionIds, options);
  
  return children({ activeSection });
};

export { useScrollSpy };
export default ScrollSpy;