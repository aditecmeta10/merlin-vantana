// Create a 3D image component
// src/components/ui/Image3D.jsx
import React, { useRef, useEffect } from 'react';

const Image3D = ({ src, alt, className = '' }) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = `
        perspective(1000px) 
        rotateY(${x * 10}deg) 
        rotateX(${-y * 10}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      imageRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div 
        ref={imageRef}
        className="transition-transform duration-200 ease-out w-full h-full"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Image3D;
