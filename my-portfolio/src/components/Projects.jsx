import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaMinus, FaPlus } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "GrabMart",
    details: "This is an online shopping platform where users can browse and purchase products like clothes, electronics, books, and home appliances. Features include account creation, login, wishlist, shopping cart, and category-based navigation. Users can add items to their cart or wishlist for easy checkout. Built with HTML, CSS, and JavaScript, the website offers a seamless and responsive shopping experience.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "User Authentication", "DOM Manipulation","Glitch"],
    githubLink: "https://github.com/Priyankanegi28/GrabMart",
    liveLink: "https://priyankanegi28.github.io/GrabMart/",
  },
  {
    id: 5,
    title: "TodoPro",
    details: "TodoPro is a feature-rich task management application that helps users organize daily activities efficiently. It supports creating, editing, deleting, and completing todos with priority levels, due dates, and categories. Users can search, filter, and sort tasks. The app ensures data persistence through LocalStorage and features a responsive UI for seamless usability across devices.",
    skills: ["HTML", "CSS", "JavaScript", "LocalStorage", "Responsive Design", "Task Management", "Glitch"],
    githubLink: "https://github.com/Priyankanegi28/Mini-Todo-App", 
    liveLink: "https://priyankanegi28.github.io/Mini-Todo-App/",
  },
  {
    id: 2,
    title: "DomBook",
    details: "DomBookApp is a lightweight book management app built with HTML, CSS, and JavaScript, using a JSON server backend. It supports Admin and User roles, enabling book management (add, verify, delete) and borrowing functionality. Admins can manage books, while users can borrow and return them. Features include role-based access, data validation, and persistent updates.",
    skills: ["HTML", "CSS", "JavaScript", "JSON Server", "DOM Manipulation","Glitch"],
    githubLink: "https://github.com/Priyankanegi28/DomBookApp",
    liveLink: "https://priyankanegi28.github.io/DomBookApp/",
  },
  {
    id: 3,
    title: "Image Gallery",
    details: "This project is a responsive image gallery built with HTML, CSS, and JavaScript. It features a grid layout, modal image preview, and sorting/filtering options. Users can browse images with hover effects and smooth transitions. The gallery is lightweight, fast, and mobile-friendly.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM Manipulation"],
    githubLink: "https://github.com/Priyankanegi28/Image_Gallery",
    liveLink: "https://priyankanegi28.github.io/Image_Gallery/",
  },
  {
    id: 4,
    title: "Calculator",
    details: "This web-based calculator, built with HTML, CSS, and JavaScript, offers two modes: Standard Calculation for basic arithmetic and Date Calculation to find differences between dates. It features a responsive design, clear/reset options, and interactive buttons.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM Manipulation"],
    githubLink: "https://github.com/Priyankanegi28/Calculator",
    liveLink: "https://priyankanegi28.github.io/Calculator/",
  },
  
  
];

const Projects = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleProject = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="sectionn-title">My Projects</h2>
          <p className="section-subtitlee">A showcase of my recent work and development projects</p>
          <div className="underlinee"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${activeId === project.id ? 'active' : ''}`}
              onClick={() => toggleProject(project.id)}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-toggle">
                  {activeId === project.id ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              
              <div className={`project-content ${activeId === project.id ? 'expanded' : ''}`}>
                <div className="project-details">
                  <p>{project.details}</p>
                  
                  <div className="skills-container">
                    <h4>Technologies Used:</h4>
                    <div className="skills-list">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-links">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="link-icon" /> View Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="link-icon" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/Priyankanegi28"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <FaGithub className="btn-icon" /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;