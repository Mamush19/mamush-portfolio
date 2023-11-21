import React from "react";
import styles from "./Experience.module.css";
import css from "../../images/skills/css.png";
import javascript from "../../images/java-script.png";
import php from "../../images/php.png";
import mysql from "../../images/mysql.png";
import node from "../../images/skills/node.png";
import react from "../../images/skills/react.png";
import html from "../../images/skills/html.png";
import google from "../../images/history/google.png";
import microsoft from "../../images/history/microsoft.png";
import netflix from "../../images/history/netflix.png";


const history = [
  {
    "role": "Software Engineer",
    "organisation": "Google",
    "experiences": ["Worked on Google Maps", "Reduced load times by 50%"],
    "imageSrc": google
  },
  {
    "role": "UI Designer",
    "organisation": "Mirosoft",
    "experiences": ["Worked on Windows 11", "Designed the control panel"],
    "imageSrc": microsoft
  },
  {
    "role": "SWE Intern",
    "organisation": "Netflix",
    "experiences": [
      "Worked on component library",
      "Helped create UI components"
    ],
    "imageSrc": netflix
  }
]


const skills = [
  {
    "title": "HTML",
    "imageSrc": html
  },
  {
    "title": "CSS",
    "imageSrc": css
  },
  {
    "title": "React",
    "imageSrc": react
  },
  {
    "title": "Node",
    "imageSrc": node
  },
  {
    "title": "php",
    "imageSrc": php
  },
  {
    "title": "mysql",
    "imageSrc": mysql
  },
  {
    "title": "javascript",
    "imageSrc": javascript
  }
]

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={`${skill.imageSrc}`} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={`${historyItem.imageSrc}`}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
