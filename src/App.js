
import './App.css';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Intro from './components/Intro/intro';
import { ReactJs } from '@icons-pack/svelte-simple-icons';
import Skill_Tag from './components/skills_tag/Skill_Tag';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/Experience/Experience';


function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
