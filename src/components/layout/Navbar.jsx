import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-primary text-2xl font-bold">Merlin</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="/Hero" className="block px-4 py-2 hover:text-primary transition-colors">Home</a>
        <a href="/ContactForm" className="block px-4 py-2 hover:text-primary transition-colors">Contact</a>
        <a href="/gallery" className="block px-4 py-2 hover:text-primary transition-colors">Gallery</a>
        <a href="/FeaturedProjects" className="block px-4 py-2 hover:text-primary transition-colors">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;

