import React, { useState, useEffect, useRef } from 'react';

const HideOnScroll = ({ children, threshold = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const shouldBeVisible = rect.top >= threshold;
        setIsVisible(shouldBeVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 3s, transform 3s'
      }}
    >
      {children}
    </div>
  );
};

export default HideOnScroll;