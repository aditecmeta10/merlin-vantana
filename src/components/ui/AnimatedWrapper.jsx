// Add a wrapper component for loading animations
// src/components/ui/AnimatedWrapper.jsx
import React, { useRef, useEffect, useState } from 'react';

const AnimatedWrapper = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
