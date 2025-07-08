import React, { useState } from 'react';
import images from '../assets/images';

export default function CallToAction({ onContactSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    propertyId: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onContactSubmit(formData);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '', propertyId: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="CallToAction_1" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div id="CallToAction_2" className="container mx-auto px-4">
        <div id="CallToAction_3" className="text-center mb-12">
          <h2 id="CallToAction_4" className="text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p id="CallToAction_5" className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't wait any longer. Contact us today and let our expert team help you find the perfect property that matches your needs and budget.
          </p>
        </div>
        
        <div id="CallToAction_6" className="grid lg:grid-cols-2 gap-12 items-center">
          <div id="CallToAction_7">
            <h3 id="CallToAction_8" className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div id="CallToAction_9" className="space-y-4 mb-8">
              <div id="CallToAction_10" className="flex items-center">
                <div id="CallToAction_11" className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span id="CallToAction_12" className="text-blue-900 font-bold">✓</span>
                </div>
                <span id="CallToAction_13">Expert consultation and guidance</span>
              </div>
              <div id="CallToAction_14" className="flex items-center">
                <div id="CallToAction_15" className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span id="CallToAction_16" className="text-blue-900 font-bold">✓</span>
                </div>
                <span id="CallToAction_17">Personalized property recommendations</span>
              </div>
              <div id="CallToAction_18" className="flex items-center">
                <div id="CallToAction_19" className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span id="CallToAction_20" className="text-blue-900 font-bold">✓</span>
                </div>
                <span id="CallToAction_21">24/7 customer support</span>
              </div>
            </div>
            
            <div id="CallToAction_22" className="flex flex-col sm:flex-row gap-4">
              <button id="CallToAction_23" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                Call Now: (555) 123-4567
              </button>
              <button id="CallToAction_24" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                Schedule Meeting
              </button>
            </div>
          </div>
          
          <div id="CallToAction_25" className="bg-white rounded-xl p-8 text-gray-800">
            <h3 id="CallToAction_26" className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form id="CallToAction_27" onSubmit={handleSubmit}>
              <div id="CallToAction_28" className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  id="CallToAction_29"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  id="CallToAction_30"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <textarea
                id="CallToAction_31"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6"
              ></textarea>
              <button
                id="CallToAction_32"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submitMessage && (
              <div id="CallToAction_33" className="mt-4 text-center text-sm">
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}