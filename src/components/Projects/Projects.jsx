import React from "react";

import styles from "./Projects.module.css";

//import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

const project = [
  {
    "title": "Project A",
    "imageSrc": "projects/project.png",
    "description": "This is a project made to learn the latest languages by building an app.",
    "skills": ["C++"]
  },
  {
    "title": "Project B",
    "imageSrc": "projects/project.png",
    "description": "This is a project made to learn the latest languages by building an app.",
    "skills": ["Java", "mysql"]
  },
  {
    "title": "Project C",
    "imageSrc": "projects/project.png",
    "description": "This is a project made to learn the latest languages by building an app.",
    "skills": ["React", "php", "Node"]
  }
]


export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {project.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
