import React, { useEffect } from 'react';
import styles from './header.module.css';
import Button from '@material-ui/core/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos-offset="300"
      data-aos-delay="40"
      data-aos="fade-down"
      className={styles.header}
    >
      <div className={styles.header_resume_btn}>
        <a
          href="https://drive.google.com/file/d/15bYBfeXaWwBVgtP0Mug1YIeKqjm6KWcP/view?usp=sharing"
          target="blank"
        >
          <Button
            className={styles.resume_btn}
            variant="contained"
            color="primary"
            npm
          >
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Header;
