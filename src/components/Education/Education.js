import React from 'react';
import styles from './education.module.css';

function Education() {
  return (
    <div className={styles.education}>
      <div className={styles.bg}>
        <h1 className={styles.name_header}>Education</h1>
        <div className={styles.content_subsection_education}>
          <div className={styles.edu_list}>
            <h3 className={styles.heading_ul}>
              Bachelor of Technology (B.Tech), Computer Science & Engineering
            </h3>
            <ul class="edu_list">
              <li class="items_list">
                Seth Jai Parkash Mukand Lal Institute Of Engineering And
                Technology
              </li>
              <li class="items_list">2019 - 2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
