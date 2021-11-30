import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

interface Props {

}

const App: React.FC<Props> = () => {
  return (
    <div>
        <div id="home"></div>
        <NavBar routes={[
            {title: "ABOUT", to:"#about"},
            {title: "PROJECTS", to:"#projects"},
            {title: "EXPERIENCE", to: "#experience"},
            {title: "CONTACT", to: "#contact"},
            {title: "RESUME", to: "pdf"},
        ]}/>
        <Home />
        <div id="about" className="mb-2"></div>
        <About />
        <div id="projects" className="mb-2"></div>
        <Projects />
        <div id="experience" className="mb-2"></div>
        <Work />
        <div id="contact" className="mb-2"></div>
        <Contact />
    </div>
  );
}

export default App;
