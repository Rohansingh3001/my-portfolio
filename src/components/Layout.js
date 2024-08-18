// src/components/Layout.js
import React from 'react';
import Header from './Header';
import About from './About';
import Bio from './Bio'; // Import the Bio component
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import './Layout.css';

const Layout = () => (
  <>
    <Header />
    <main>
      <About />
      <Bio /> {/* Add the Bio component here */}
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Layout;
