import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import ValuePillars from './components/home/ValuePillars';
import FounderMessage from './components/home/FounderMessage';
import CompanyStats from './components/home/CompanyStats';
import FeaturedProjects from './components/home/FeaturedProjects';
import Testimonials from './components/home/Testimonials';
import ContactForm from './components/home/ContactForm';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Fade-in animation for elements as they enter viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <ValuePillars />
        <FounderMessage />
        <CompanyStats />
        <FeaturedProjects />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
