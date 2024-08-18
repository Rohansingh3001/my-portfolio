// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="fadeIn">
    <h2>My Projects</h2>
    <ul className="projects-list">
      <li className="project">
        <h3 className="project-title">Project 1</h3>
        <p className="project-description">Description of Project 1.</p>
        <div className="project-links">
          <a href="https://github.com/Rohansingh3001/youtube-video-downloader" target="_blank" rel="https://github.com/Rohansingh3001/youtube-video-downloader">GitHub</a>
          <a href="https://youtube-video-downloader-zuyn.vercel.app/" target="_blank" rel="https://youtube-video-downloader-zuyn.vercel.app/">Live Demo</a>
        </div>
      </li>
      <li className="project delay1">
        <h3 className="project-title">Project 2</h3>
        <p className="project-description">Description of Project 2.</p>
        <div className="project-links">
          <a href="https://github.com/Rohansingh3001/farmers-goods" target="_blank" rel="https://github.com/Rohansingh3001/farmers-goods">GitHub</a>
          <a href="https://farmers-goods.vercel.app/" target="_blank" rel="https://farmers-goods.vercel.app/">Live Demo</a>
        </div>
      </li>
      <li className="project delay2">
        <h3 className="project-title">Comming Soon</h3>
        <p className="project-description"></p>
        <div className="project-links">
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </li>
    </ul>
  </section>
);

export default Projects;
