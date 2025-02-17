import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import "./App.css";
import Badges from "./components/Badges";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProfessionalJourney from "./components/ProfessionalJourney";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProfessionalJourney/>
      <Badges />
      <Contact/>
    </>
  );
};

export default App;
