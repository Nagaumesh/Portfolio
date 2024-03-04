import React from "react";                          /* type rafc to get boilerplate */

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kamisetty Nagaumesh</h1>
        <p className={styles.description}>
        "I expertise in frontend development, data science, and Java problem-solving.
        Currently seeking internship opportunities to further enhance my skills
        </p>
        <a href="mailto:umesh.kamisetty@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
