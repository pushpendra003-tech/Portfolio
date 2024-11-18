import React from 'react';
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
      description: 'The Newspaper Web App is a modern, responsive platform built with React.js to provide users with a dynamic and interactive experience while keeping up with the latest news. ',
      link: 'https://github.com/pushpendra003-tech/news-website-',
    },
    {
      title: 'Portfolio',
      description: 'The Portfolio Web App is a modern, dynamic online portfolio showcasing my skills, projects, and experiences as a developer. Built using React.js',
      link: 'https://github.com/yourusername/project3',
    },
   
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
