import React from 'react';
import Skill_Tag from '../skills_tag/Skill_Tag';
import styles from './skills.module.css';

function Skills() {
  return (
    <div className={styles.skills_conatiner}>
      <h1 className={styles.name_skills}>Tech I'am Familiar With</h1>
      <div className={styles.content_subsection_skills}>
        <Skill_Tag
          img_src="https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg"
          name="Machine Learning"
        />
        <Skill_Tag
          img_src="https://cdn.worldvectorlogo.com/logos/javascript.svg"
          name="Javascipt"
        />
        <Skill_Tag
          img_src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          name="React"
        />
        <Skill_Tag
          img_src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"
          name="Nodejs"
        />
        <Skill_Tag
          img_src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
          name="Express.js"
        />
        <Skill_Tag
          img_src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          name="MongoDb"
        />
        <Skill_Tag
          img_src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
          name="Python"
        />

        <Skill_Tag
          img_src="https://cdn.worldvectorlogo.com/logos/c.svg"
          name="C++"
        />

        <Skill_Tag
          img_src="https://cdn.worldvectorlogo.com/logos/flask.svg"
          name="Flask"
        />
        <Skill_Tag
          img_src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg"
          name="jQuery"
        />
      </div>
      <hr className={styles.hr}></hr>
    </div>
  );
}

export default Skills;
