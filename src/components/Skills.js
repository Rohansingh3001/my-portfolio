// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skillsData = [
  { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
  { name: "React JS", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Node JS", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" },
  { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "C", logo: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
  { name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c.svg" },
];

const Skills = () => (
  <section id="skills" className="fadeIn">
    <h2>Skills</h2>
    <ul className="skills-list">
      {skillsData.map((skill, index) => (
        <li key={skill.name} className={`delay${index + 1}`}>
          <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
