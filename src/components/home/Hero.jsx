import React, { useEffect, useRef } from 'react';
import landscapeVideo from '../../assets/images/landscape.mp4'; // Adjust the path based on your project structure

const Hero = () => {
  const mountainRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mountainRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;

      mountainRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-b from-blue-100 to-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src={landscapeVideo} 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div ref={mountainRef} className="mb-6 transition-transform duration-300 ease-out">
          {/* Animated Graphics Placeholder */}
        </div>

        {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Add More to Life
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-white drop-shadow-md">
          At Merlin, not only do we look to the future, but we enable our stakeholders, partners, and customers to do so as well. The future is about evolution. Merlin evolves more aesthetically every day.
        </p> */}

        {/* <button className="mt-8 px-8 py-3 bg-primary text-white rounded-full hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300">
          Discover More
        </button> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;