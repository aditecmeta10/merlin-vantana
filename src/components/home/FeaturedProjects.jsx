// src/components/home/FeaturedProjects.jsx
import React, { useState } from 'react';

// Import images correctly
import img2 from '../../assets/images/ventana-pro.png';
import img3 from '../../assets/images/elementa.jpg';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Project data including features
  const projects = [
    {
      name: "Ventana",
      description: "High-end residential apartments with premium amenities",
      location: "Baner Pune",
      image: img2,
      features: ["Premium amenities", "Strategic location", "Modern architecture"],
    },
    {
      name: "Elementa",
      description: "Luxury apartments with smart home technology",
      location: "Near Decathlon Wakad",
      image: img3,
      features: ["Smart home automation", "Spacious layouts", "Eco-friendly design"],
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0">
          Featured Projects
        </h2>

        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                activeProject === index ? 'opacity-100 z-20' : 'opacity-0 z-10 absolute inset-0'
              }`}
            >
              <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-xl">
                {/* Image Section */}
                <div className="lg:w-3/5 relative">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                    <p className="mb-4">{project.location}</p>
                    <button className="px-6 py-2 bg-secondary text-black font-semibold rounded hover:bg-yellow-400 transition-colors">
                      Explore
                    </button>
                  </div>
                </div>

                {/* Text & Features Section */}
                <div className="lg:w-2/5 bg-white p-8">
                  <h4 className="text-2xl font-bold mb-4">{project.name}</h4>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  {/* Features List */}
                  <div className="mb-8">
                    <h5 className="font-semibold mb-2">Key Features:</h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-100 transition-colors">
                      Brochure
                    </button>
                    <button className="px-6 py-2 bg-primary text-white font-semibold rounded hover:bg-blue-700 transition-colors">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
            <button
              onClick={() => setActiveProject(prev => (prev > 0 ? prev - 1 : projects.length - 1))}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
            <button
              onClick={() => setActiveProject(prev => (prev < projects.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;