import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaMinus, FaPlus } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "GrabMart",
    details: "This is an online shopping platform where users can browse and purchase products like clothes, electronics, books, and home appliances. Features include account creation, login, wishlist, shopping cart, and category-based navigation. Users can add items to their cart or wishlist for easy checkout. Built with HTML, CSS, and JavaScript, the website offers a seamless and responsive shopping experience.",
    skills: "HTML, CSS, JavaScript, Responsive Design, User Authentication, Glitch, DOM Manipulation.",
    githubLink: "https://github.com/Priyankanegi28/GrabMart",
    liveLink: "https://priyankanegi28.github.io/GrabMart/",
  },
  {
    id: 2,
    title: "DomBook",
    details: "DomBookApp is a lightweight book management app built with HTML, CSS, and JavaScript, using a JSON server backend. It supports Admin and User roles, enabling book management (add, verify, delete) and borrowing functionality. Admins can manage books, while users can borrow and return them. Features include role-based access, data validation, and persistent updates.",
    skills: "HTML, CSS, JavaScript, JSON Server, DOM Manipulation, Glitch.",
    githubLink: "https://github.com/Priyankanegi28/DomBookApp",
    liveLink: "https://priyankanegi28.github.io/DomBookApp/",
  },
  {
    id: 3,
    title: "Image Gallery",
    details: "This project is a responsive image gallery built with HTML, CSS, and JavaScript. It features a grid layout, modal image preview, and sorting/filtering options. Users can browse images with hover effects and smooth transitions. The gallery is lightweight, fast, and mobile-friendly.",
    skills: "HTML, CSS, JavaScript, Responsive Design, DOM Manipulation.",
    githubLink: "https://github.com/Priyankanegi28/Image_Gallery",
    liveLink: "https://nimble-platypus-ce75cd.netlify.app/",
  },
  {
    id: 4,
    title: "Calculator",
    details: "This web-based calculator, built with HTML, CSS, and JavaScript, offers two modes: Standard Calculation for basic arithmetic and Date Calculation to find differences between dates. It features a responsive design, clear/reset options, and interactive buttons.",
    skills: "HTML, CSS, JavaScript, Responsive Design, DOM Manipulation.",
    githubLink: "https://github.com/Priyankanegi28/Calculator",
    liveLink: "https://luxury-sunburst-c0e46d.netlify.app/",
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleProject = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">PROJECTS</h2>
      <p className="projects-subtitle"><em>My Work Showcase</em></p>
      <div className="underline"></div>

      {projects.map((project) => (
        <div key={project.id} className="project">
          <div className="project-header" onClick={() => toggleProject(project.id)}>
            <h3 className="project-title">{project.title}</h3>
            {activeId === project.id ? <FaMinus className="icoon" /> : <FaPlus className="icoon" />}
          </div>
          {activeId === project.id && (
            <div className="project-details">
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <p>{project.details}</p>
              {project.skills && (
                <p className="project-skills">
                  <strong>Skills Used:</strong> {project.skills}
                </p>
              )}
              {/* GitHub and Live Server Icons */}
              {project.githubLink && project.liveLink && (
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub className="link-icon" /> GitHub Repo
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt className="link-icon" /> Live Server
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* GitHub Button */}
      <a
        href="https://github.com/Priyankanegi28"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="github-btn">Git Hub</button>
      </a>
    </div>
  );
};

export default Projects;