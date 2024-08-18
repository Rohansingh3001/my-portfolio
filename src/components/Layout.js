// src/components/Layout.js
import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer'; // Updated import path
import './Layout.css';

const Layout = () => (
  <>
    <Header />
    <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer /> {/* Ensure the Footer is rendered */}
  </>
);

export default Layout;
