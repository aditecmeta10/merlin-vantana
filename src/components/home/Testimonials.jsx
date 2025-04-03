import React, { useState } from 'react';
import ratingImage from '../../assets/images/rating.png'; // Ensure the image path is correct

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "We were looking for the perfect home and we got exactly what we wanted with Merlin Elements 2.0. Discover a realm of contemporary living where every moment is infused with style and grace...",
      name: "Ria & Neeraj",
      project: "Elements 2.0",
      image: ratingImage,
    },
    {
      text: "From the very beginning, the Merlin team understood our requirements and helped us find our dream home with excellent amenities and perfect location.",
      name: "Abijay & Priya",
      project: "Ventana",
      image: ratingImage,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonial</h2>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${activeTestimonial === index ? 'opacity-100 block' : 'opacity-0 hidden'}`}
            >
              <blockquote className="text-lg text-gray-700 mb-8">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-start">
                <div className="mr-8">
                  <h3 className="font-bold text-xl mb-1">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.project}</p>
                </div>

                <div className="flex-grow flex justify-end space-x-4">
                  <img
                    src={testimonial.image}
                    alt="Happy Customer"
                    className="w-1/3 h-auto object-cover rounded-md shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-primary font-semibold hover:text-blue-700 transition-colors">
              More Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;