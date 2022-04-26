import React from 'react';

import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
import { Hero } from './sections/Hero/Hero';
import { Contact } from './sections/Contact/Contact';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';

function App() {
  return (
    <div id="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
