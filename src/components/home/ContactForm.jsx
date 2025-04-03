import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://p7hjkeqa74.execute-api.eu-north-1.amazonaws.com/prod/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', mobile: '', city: '', consent: false });
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form.');
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-on-scroll opacity-0">Enquire Now</h2>

        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {['name', 'email', 'mobile', 'city'].map((field) => (
              <div key={field} className="animate-on-scroll opacity-0">
                <input
                  type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-800 bg-opacity-30 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-blue-200 text-white"
                />
              </div>
            ))}
          </div>

          <div className="mb-6 animate-on-scroll opacity-0">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 mr-3"
              />
              <label htmlFor="consent" className="text-sm">
                By submitting this form, I consent to receive calls, messages, and communications from Merlin Group and its subsidiaries
              </label>
            </div>
          </div>

          <div className="text-center animate-on-scroll opacity-0">
            <button
              type="submit"
              className="px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;