import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>

        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/java.jpeg")} alt="java icon" />
            <div className={styles.aboutItemText}>
              <h3>Java Programmer</h3>
              <p>
               Skilled Java programmer with a solid foundation in Data Structures and Algorithms.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>JSX/CSS Frontend Mastery</h3>
              <p>
                Capable of building websites using Javascript and CSS to create polished frontend experiences.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data science</h3>
              <p>
                Proficient in Data Science methodologies, adept at extracting valuable insights from complex datasets.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
