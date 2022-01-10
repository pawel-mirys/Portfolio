import React from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
import { About } from './sections/About/About';
import { Contact } from './sections/Contact/Contact';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';

function App() {
  return (
    <div id="App">
      <Nav />
      <div id="page-wrap">
        <About />
        <Projects />
        <Contact />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
