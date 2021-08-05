import React from 'react';
import styles from './header.module.css';
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Brightness2Icon from "@material-ui/icons/Brightness2";

function Header() {
    return (
      <div className={styles.header}>
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

export default Header
