import React, { useEffect, useState } from 'react';
import './About.css';
import myPicture from '../components/images/image.jpg'; // Update the path to your picture

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Node JS",
  "Firebase",
  "Python",
  "C",
  "C++"
];

const About = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;

    if (isTyping) {
      typingTimeout = setTimeout(() => {
        const currentSkill = skills[currentSkillIndex];
        setDisplayedText((prev) => currentSkill.slice(0, prev.length + 1));

        if (displayedText === currentSkill) {
          setIsTyping(false);
        }
      }, 100);
    } else {
      erasingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));

        if (displayedText === "") {
          setIsTyping(true);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      }, 100);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [displayedText, isTyping, currentSkillIndex]);

  return (
    <section id="about">
      <div className="about-content">
        <h2><strong>Rohan Singh</strong></h2>
        <p>
          <strong> Hello there! 🤙</strong><br />
          I am a passionate Web Developer and ML enthusiast. <br />
          I like to create websites and provide user-friendly web experiences.
        </p>
        <p className="typing-text">{displayedText}</p>
      </div>
      <div className="about-image">
        <img src={myPicture} alt="My Picture" />
      </div>
    </section>
  );
};

export default About;
