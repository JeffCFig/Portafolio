import React from "react";
import projects from "../data/projects";
import ProjectCard from "../data/ProjectCard";
import "../Styles/Projects.css";

const Projects = () => (
  <section className="modern-projects" id="projects">
    <h2>Mis Proyectos</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;