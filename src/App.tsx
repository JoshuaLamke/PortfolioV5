import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './app.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

interface Props {

}

const App: React.FC<Props> = () => {
  return (
    <div>
        <div id="home"></div>
        <NavBar routes={[
            {title: "About", to:"#about"},
            {title: "Projects", to:"#projects"},
        ]}/>
        <Home />
        <div id="about"></div>
        <About />
        <div id="projects"></div>
        <Projects />

    </div>
  );
}

export default App;
