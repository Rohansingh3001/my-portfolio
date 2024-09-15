import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer id="footer">
    <p>Developed by Rohan Singh</p>
    <div className="social-links">
      <a href="https://www.instagram.com/rohan_30.01/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/rohan-singh-033748243/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:rsingh300103@gmail.com">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="https://github.com/Rohansingh3001" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
