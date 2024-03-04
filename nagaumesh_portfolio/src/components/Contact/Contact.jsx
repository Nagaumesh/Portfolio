import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>To connect, reach out to:</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:umesh.kamisetty@gmail.com">umesh.kamisetty@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nagaumesh-kamisetty-462337220">linkedin.com/Nagaumesh Kamisetty</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Nagaumesh">github.com/Nagaumesh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/insta.png")} alt="insta icon" />
          <a href="https://www.instagram.com/umesh.kamisetty/">instagram.com/umesh.kamisetty</a>
        </li>
      </ul>
    </footer>
  );
};
