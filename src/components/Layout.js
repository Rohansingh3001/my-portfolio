// src/components/Layout.js
import React from 'react';
import Header from './Header';
import About from './About';
import Bio from './Bio';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer'; // Import Footer
import Contact from './Contact';
import './Layout.css';
import resume from './resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const Layout = () => (
  <>
    <Header />
    <main>
      <About />
      <Bio />
      <Projects />
      <Skills />
      <Footer /> {/* Moved Footer directly after Skills */}
      <Contact />
    </main>
    
    {/* Resume Download Button */}
    <a 
      href={resume} 
      download="Rohan_singh.pdf" 
      className="resume-button"
    >
      <FontAwesomeIcon icon={faDownload} className="download-icon" />
      <span className="resume-text">Download Resume</span>
    </a>
  </>
);

export default Layout;
