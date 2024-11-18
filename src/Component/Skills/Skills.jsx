import React from 'react';
import './Skills.css';  
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';  

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      description: 'Building structured and semantic web pages.',
      icon: <FaHtml5 size={50} color="#E34F26" />,
    },
    {
      name: 'CSS',
      description: 'Styling and designing responsive web pages.',
      icon: <FaCss3Alt size={50} color="#1572B6" />,
    },
    {
      name: 'JavaScript',
      description: 'Creating interactive and dynamic websites.',
      icon: <FaJsSquare size={50} color="#F7DF1E" />,
    },
    {
      name: 'React',
      description: 'Building modern single-page applications with React.',
      icon: <FaReact size={50} color="#61DBFB" />,
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon-container">
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
