import React from 'react';

import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

import '../styles/index.css';

   const AppRouter = () => (
    <div> 
        <Navigation/>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />

    </div>
   );
   
   export default AppRouter;