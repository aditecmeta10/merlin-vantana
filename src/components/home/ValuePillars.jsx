import React from 'react';
import growthImg from '../../assets/images/growth.png';
import dependImg from '../../assets/images/depend.png';
import transformImg from '../../assets/images/transforna.png';

const ValuePillars = () => {
  const values = [
    {
      title: "GROWTH",
      image: growthImg,
      description: "We believe in sustainable growth that benefits all stakeholders."
    },
    {
      title: "DEPENDABILITY",
      image: dependImg,
      description: "Trust is earned through consistent delivery of quality."
    },
    {
      title: "TRANSFORMATION",
      image: transformImg,
      description: "We transform spaces into places that enhance lives."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
              
              <img 
                src={value.image} 
                alt={value.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#brand-story" 
            className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 animate-on-scroll opacity-0"
          >
            OUR BRAND STORY
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;