import React from 'react';
import Home from './components/home/home';
import NavBar from './components/navbar/Navbar';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Activity from './components/activity/activity';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Activity />
      <Contact />
      <Footer />
    </div>
  )
}

export default App