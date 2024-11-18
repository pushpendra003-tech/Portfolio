import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-hero">
        <h1>👋 Hello, I'm Pushpendra Pandey!</h1>
        <p>
          A passionate <span>React Developer</span> dedicated to crafting seamless digital experiences.
        </p>
      </div>

      <div className="experience-section">
        <h2>My Journey</h2>
        <p>
          With a background in <b>React development</b>, I have mastered the art of building interactive applications using modern Library like <b>React.js</b> . I’m always eager to learn new technologies and explore creative solutions.
        </p>
      </div>

      <div className="skills-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">📄 HTML</div>
          <div className="skill-card">🎨 CSS</div>
          <div className="skill-card">💻 JavaScript</div>
          <div className="skill-card">⚛️ React</div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Let's Build Something Great Together!</h2>
        <button className="cta-button">Get in Touch</button>
      </div>
    </section>
  );
};

export default About;
