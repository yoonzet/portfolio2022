import { useRef } from "react";
import './App.css';
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Project from "./Components/Project";


// ---------- COMPONENT -----------


function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const onAboutMeClick = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onSkillsClick = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onProjectClick = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ul className='navWrap'>
        <li onClick={onAboutMeClick}>About Me</li>
        <li onClick={onSkillsClick}>Skills</li>
        <li onClick={onProjectClick}>Project</li>
      </ul>

      <div className="introWrap">
        <div className="circle"></div>
        <div className="circle-dotted"></div>
        <h1 className="keep">Keep <br /> Moving <br /> Forward</h1>
      </div>

      <AboutMe ref={aboutMeRef}/>
      <Skills ref={skillsRef}/>
      <Project ref={projectRef}/>

      <div className="footer">&copy;2022 Portfolio <br /> yoonzet703@gmail.com / Lee yoonji</div>
   </>
  );
}

export default App;
