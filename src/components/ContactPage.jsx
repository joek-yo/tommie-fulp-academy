// components/ContactPage.jsx

import React, { useState } from 'react';
import './ContactPage.css'; // Create this file for CSS styles
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData); // Adjust the API route as necessary
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset the form
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
