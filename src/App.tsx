import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './app.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';

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
            {title: "CONTACT", to: "#contact"}
        ]}/>
        <Home />
        <div id="about"></div>
        <About />
        <div id="projects"></div>
        <Projects />
        <div id="experience"></div>
        <Work />

    </div>
  );
}

export default App;
