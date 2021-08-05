import React from 'react';
import styles from './project_tag.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';

function Projects_tag(props) {
  return (
    <div className={styles.project_tile}>
      <h3 className={styles.name}>
        <strong>{props.name}</strong>
      </h3>
      <h3 className={styles.tech}>{props.tech_stack}</h3>
      <i>
        <p>{props.des}</p>
      </i>
      <div className={styles.flexbox}>
        <h3 className={styles.link}>
          <a href={props.link} target="blank">
            <Button variant="contained" color="primary">
              Watch
            </Button>
          </a>
        </h3>
        <h3 className={styles.link}>
          <a href={props.source_code} target="blank">
            <GitHubIcon />
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Projects_tag;
