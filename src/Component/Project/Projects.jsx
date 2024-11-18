import React, { useState } from 'react';
import './projects.css'; 
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Edusity',
      description: 'A modern, responsive web application built using React.',
      link: 'https://github.com/pushpendra003-tech/edusity1',
    },
    {
      title: 'Newspaper website',
      description: 'The Newspaper Web App is a modern, responsive platform built with React.js to provide users with a dynamic and interactive experience while keeping up with the latest news.',
      link: 'https://github.com/pushpendra003-tech/news-website-',
    },
    {
      title: 'Portfolio',
      description: 'The Portfolio Web App is a modern, dynamic online portfolio showcasing my skills, projects, and experiences as a developer. Built using React.js',
      link: 'https://github.com/pushpendra003-tech/Portfolio',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousProject = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextProject = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="slider-container">
        <button onClick={goToPreviousProject} className="slider-btn left">
          &#60;
        </button>
        <div className="projects-container">
          <ProjectCard 
            key={currentIndex} 
            title={projects[currentIndex].title} 
            description={projects[currentIndex].description} 
            link={projects[currentIndex].link} 
          />
        </div>
        <button onClick={goToNextProject} className="slider-btn right">
          &#62;
        </button>
      </div>
    </section>
  );
};

export default Projects;
