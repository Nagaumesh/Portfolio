import React from "react";                          /* type rafce to get boilerplate */

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kamisetty Nagaumesh</h1>
        <p className={styles.description}>
        I expertise in frontend development, data science, and Java problem-solving.
        Currently seeking internship opportunities to further enhance my skills.
        </p>
        <div className={styles.buttonContainer}> {/* New container for buttons */}
          <a href="mailto:umesh.kamisetty@gmail.com" className={styles.contactBtn}>
            Mail Me
          </a>
          <a href="" className={styles.contactBtn}>
            Download resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
