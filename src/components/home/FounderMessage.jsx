import React from 'react';
import img4 from '../../assets/images/image.png'; // Adjust the path based on your project structure

const FounderMessage = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-on-scroll opacity-0">
            <div className="relative">
              <img 
                src={img4} 
                alt="Founder" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4">From the Founder's Desk</h2>
            
            <blockquote className="text-lg italic text-gray-700 mb-6">
              "As we evolve our vision extends beyond just bringing exceptional spaces to life."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-1 bg-secondary mr-4"></div>
              <p className="font-semibold">Mr. Sushil Mohta, Founder & Chairman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;