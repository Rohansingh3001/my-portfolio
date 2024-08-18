// src/components/Contact.js
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import Modal from './Modal';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        'service_jascicr', // Replace with your service ID
        'template_6jwa0ka', // Replace with your template ID
        form.current,
        'EwqYVdO7uPii8oOls' // Replace with your public key (user ID)
      );
      setSuccessMessage('Message sent successfully!');
      setErrorMessage('');
      e.target.reset(); // Clear the form after successful submission
    } catch (error) {
      setErrorMessage('Failed to send the message. Please try again.');
      setSuccessMessage('');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <button className="contact-btn" onClick={openModal}>Open Contact Form</button>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="user_name" 
            placeholder="Your Name" 
            required 
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
          />

          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            required
          ></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </button>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </Modal>
    </section>
  );
};

export default Contact;
