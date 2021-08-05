import React from "react";
import styles from "./intro.module.css";
import img from "./img_my.jpg";

const Intro = () => {
  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.bg}>
        <div className={styles.intro_outer}>
          <div className={styles.intro_text_content}>
            <h1 className={styles.name_header}>Naveen Kumar</h1>
            <h2 className={styles.short_bio}>
              <strong>" </strong>MERN Stack | Open Source Contributor
              | Deep Learning Enthusiast
              <strong> "</strong>
            </h2>
            <p className={styles.inro_lines}>
              I am a hard working, honest individual. I am always willing to
              learn new skills. I am friendly, helpful and polite, have a good
              sense of humour. I am able to work independently in busy
              environments and also a team setting. I am outgoing and tactful,
              and able to listen effectively when solving problems.
            </p>
          </div>
        </div>
        <div className={styles.imgwrapper}>
          <img src={img} className={styles.img}></img>
        </div>
        <div className={styles.social_links_div}>
          <div className={styles.social_links}>
            <a href="https://www.instagram.com/naveen_8801/" target="_blank">
              <img
                src="https://image.flaticon.com/icons/svg/2111/2111463.svg"
                alt="insta_logo"
                className={styles.social_media}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-kumar-6777881ab/"
              target="_blank"
            >
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/145/145807.svg"
                alt="linkdin_logo"
                className={styles.social_media}
              />
            </a>
            <a href="https://github.com/naveen8801" target="_blank">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/733/733553.svg"
                alt="linkdin_logo"
                className={styles.social_media}
              />
            </a>
            <a href="https://twitter.com/naveen_8801" target="_blank">
              <img
                src="https://image.flaticon.com/icons/svg/733/733579.svg"
                alt="twitter_logo"
                className={styles.social_media}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
