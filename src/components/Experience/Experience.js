import React from 'react';
import classes from './experience.module.css';
import styles from './experience.module.css';
import Experience_tag from './Experience_tag/Experience_tag';

function Experience() {
  return (
    <div className={styles.container}>
      <div className={classes.bg}>
        <h1 className={styles.name_skills}>Experience</h1>
        <div className={styles.content_subsection_experience}>
          <Experience_tag
            job_title="Frontend Developer Intern"
            company_title="Urmeet"
            job_type="Internship"
            job_location="Remote - India"
            job_duration="March 2021 - June 2021"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
