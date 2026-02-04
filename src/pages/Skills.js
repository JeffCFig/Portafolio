import React from "react";
import "../Styles/Skills.css"; 
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiSass, SiFigma, SiGit, SiPython, SiSqlite} from "react-icons/si";
import { MdPictureInPicture } from "react-icons/md"; // For Tkinter (window/picture)
import { MdPictureAsPdf } from "react-icons/md"; // For ReportLab (PDF)
import { MdPhoneIphone } from "react-icons/md"; // For Responsive Design

const skills = [
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "React", icon: <SiReact color="#61dafb" /> },
  { name: "HTML5", icon: <SiHtml5 color="#e34c26" /> },
  { name: "CSS3", icon: <SiCss3 color="#2965f1" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#3c873a" /> },
  { name: "Sass", icon: <SiSass color="#cd6799" /> },
  { name: "Figma", icon: <SiFigma color="#a259ff" /> },
  { name: "Git", icon: <SiGit color="#f34f29" /> },
  { name: "Python", icon: <SiPython color="#3776ab" /> },
  { name: "SQLite", icon: <SiSqlite color="#003b57" /> },
  { name: "Tkinter", icon: <MdPictureInPicture color="#005f9e" /> }, // React-icon for Tkinter (window)
  { name: "ReportLab", icon: <MdPictureAsPdf color="#d32f2f" /> },   // React-icon for ReportLab (PDF)
  { name: "Responsive Design", icon: <MdPhoneIphone color="#282c34" /> }
];

const Skills = () => (
  <section className="modern-skills" id="skills">
    <h2>Habilidades</h2>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <span className="skill-icon">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;