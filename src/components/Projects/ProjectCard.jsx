import React from "react";
import styles from "./ProjectCard.module.css";
import project from "../../assets/projects/project.png";

export const ProjectCard = ({
  project: { title, description, skills },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={project}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
