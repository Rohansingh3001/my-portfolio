// src/components/Footer.js
import React from 'react';
import './Footer.css';


const Footer = () => (
  <footer id="footer">
    <p>Developed by Rohan Singh</p>
    <div className="social-links">
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:your-email@example.com">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
