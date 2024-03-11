import React from "react";

import styles from "./Achievement.module.css";
import { getImageUrl } from "../../utils";

export const Achievement = () => {
  return (
    <section className={styles.container} id="achievement">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("Achievements/achievement.gif")}
          alt="Achievement image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>

        <li className={styles.aboutItem}>
            <img src={getImageUrl("Achievements/google.png")} alt="google icon" />
            <div className={styles.aboutItemText}>
              <h3>Google Cloud Computing Foundations</h3>
              <p>
                This certification highlights my proficiency in leveraging cloud services.
              </p>
              <div className={styles.links}>
                <a className={styles.link} href="https://drive.google.com/file/d/1sdGWyblVj6vnOTisKpoku3wuTwn3xPvn/view">Certificate</a>
              </div>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Achievements/microsoft.png")} alt="microsoft icon" />
            <div className={styles.aboutItemText}>
              <h3>AZ-104: Microsoft Azure Administrator</h3>
              <p>
                This certification signifies my proficiency in Azure resource management and deployment.
              </p>
              <div className={styles.links}>
                <a className={styles.link} href="https://drive.google.com/file/d/1Y1mMHiiciDqSYNYhBKjtPI9LRFlzlHMQ/view">Certificate</a>
              </div>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("Achievements/publish.jpg")} alt="publisher icon" />
            <div className={styles.aboutItemText}>
              <h3>Published book contributor</h3>
              <p>
              KAMISETTY NAGAUMESH (2022)  “VOICE ASSISTANTS-FUTURE OF INTERACTION”,(pp:96-104) Royal Book Publishing, ISBN: 9789391131197
              </p>
              <div className={styles.links}>
                <a className={styles.link} href="https://www.royalbookpublishing.com/index.php/royal/catalog/book/265">Link</a>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
