import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useRef } from "react";
import "./App.css";
import Badges from "./components/Badges";
import Contact from "./components/Contact";
import Experience from './components/Experience';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProfessionalJourney from "./components/ProfessionalJourney";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);  // Create a ref for Experience
  const contactRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar 
        scrollToHero={scrollToHero} 
        scrollToAbout={scrollToAbout} 
        scrollToWork={scrollToWork} 
        scrollToContact={scrollToContact} 
      />
      
      <div ref={heroRef}>
        <Hero scrollToContact={scrollToContact} />
      </div>
      
      <div ref={aboutRef}>
        <ProfessionalJourney />
      </div>

      <div ref={workRef}>
        <Experience />
      </div>

      <Badges />

      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default App;
