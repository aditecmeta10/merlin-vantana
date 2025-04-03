// src/components/home/CompanyStats.jsx
import React, { useState, useEffect, useRef } from 'react';
import img1 from '/src/assets/images/ventana.png';

const CompanyStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { value: 40, label: "years of adding to skylines" },
    { value: 8, label: "Business Verticals" },
    { value: 160, label: "RERA Projects Delivered" },
    { value: 20, label: "Million Sq. ft. Developed" },
    { value: 200, label: "Happy Families" },
    { value: 1500, label: "Acres under Development" },
    // { value: 1500, label: "Employees across India" }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 mb-8 lg:mb-0 animate-on-scroll opacity-0">
            <div className="relative">
              <img 
                src={img1} 
                alt="Merlin Building" 
                // className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded">
                <p className="font-bold text-primary">Ventana</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 lg:pl-16">
            <h2 className="text-3xl font-bold mb-8 animate-on-scroll opacity-0">40 years of adding to skylines</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-2">
                    <span className={`text-4xl font-bold ${isVisible ? 'counter' : ''}`}>
                      {isVisible ? stat.value : 0}
                    </span>
                    {index < 3 && <span className="text-2xl text-secondary">+</span>}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;

