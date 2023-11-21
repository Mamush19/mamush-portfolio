import React from "react";
import styles from "./Hero.module.css";
import mamu from "../../images/mamu.jpg";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className="myName">Mamush</span> </h1>
        <p className={styles.description}>
          I'm a front-end developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:henokfikadu90@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={mamu}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
