import React from "react";
import { Link } from "react-router-dom";
// import "../Styles/Projects.css"; 

const ProjectCard = ({ title, description, link, image, type }) => (
  <div className="project-card">
    <img className="project-image" src={image} alt={title} />
    <h3 className="project-title">{title}</h3>
    <p>{description}</p>
    <div className="project-link-container">
      {type === "web" ? (
        <a
          href={link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      ) : (
        <Link to={link} className="project-link">
          Ver proyecto
        </Link>
      )}
    </div>
  </div>
);

export default ProjectCard;