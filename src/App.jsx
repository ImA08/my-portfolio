import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    
    AOS.refresh();
  }, []);

  return (
    <main className='bg-gray-950'>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  )

}

export default App;
