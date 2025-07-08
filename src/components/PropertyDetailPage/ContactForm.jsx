import React, { useState } from 'react';
import images from '../assets/images';

const ContactForm = ({ onSubmit, propertyId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      try {
        await onSubmit({ ...formData, propertyId });
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setErrors({ submit: 'Failed to send message. Please try again.' });
      }
      setSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form id="ContactForm_1" onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <h2 id="ContactForm_2" className="text-2xl font-bold mb-6">Contact Agent</h2>
      
      <div id="ContactForm_3" className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="ContactForm_4"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full p-3 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div id="ContactForm_5" className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="ContactForm_6"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Your email"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div id="ContactForm_7" className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="ContactForm_8"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full p-3 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          rows="4"
          placeholder="Your message"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {errors.submit && (
        <div id="ContactForm_9" className="mb-4 text-red-500 text-sm">{errors.submit}</div>
      )}

      <button
        id="ContactForm_10"
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;