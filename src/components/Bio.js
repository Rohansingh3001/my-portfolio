// src/components/Bio.js
import React from 'react';
import './Bio.css';

const Bio = () => (
  <section id="bio" className="bio-section"> {/* Use id="bio" instead of "Bio" */}
    <h2>About Me</h2>
    <p>
    Hello, I'm Rohan Singh. I am pursuing a B.Tech in Computer Science and Engineering (AIML), and I'm a passionate web developer and ML enthusiast. My focus is on crafting user-friendly web experiences using both front-end and back-end technologies. I am committed to continuously learning and growing in my field.
    </p>
    <p>
      I specialize in web development, particularly using technologies like HTML, CSS, JavaScript, React, and Node.js, while also exploring the realms of machine learning with Python.
    </p>
  </section>
);

export default Bio;
