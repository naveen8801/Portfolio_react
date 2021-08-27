import { useEffect } from 'react';
import './App.css';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Intro from './components/Intro/intro';
import { ReactJs } from '@icons-pack/svelte-simple-icons';
import Skill_Tag from './components/skills_tag/Skill_Tag';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/Experience/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Intro />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <div
        data-aos-offset="300"
        data-aos-delay="40"
        data-aos="fade-down"
        className="social-div"
      >
        <a href="mailto:naveensharma10d@gmail.com" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/gmail-new.png"
            alt="gmail_logo"
            className="social_media"
          />
        </a>
        <a href="https://www.instagram.com/naveen_8801/" target="_blank">
          <img
            src="https://image.flaticon.com/icons/svg/2111/2111463.svg"
            alt="insta_logo"
            className="social_media"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/naveen-kumar-6777881ab/"
          target="_blank"
        >
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/145/145807.svg"
            alt="linkdin_logo"
            className="social_media"
          />
        </a>
        <a href="https://github.com/naveen8801" target="_blank">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/733/733553.svg"
            alt="linkdin_logo"
            className="social_media"
          />
        </a>
        <a href="https://twitter.com/naveen_8801" target="_blank">
          <img
            src="https://image.flaticon.com/icons/svg/733/733579.svg"
            alt="twitter_logo"
            className="social_media"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
