import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import backgroundImage from "../assets/image.png";
import "./Hero.css";

const Hero = ({ scrollToContact }) => {
  return (
    <header className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1>PRIYANKA NEGI</h1>
        <h2><i>Frontend Developer</i></h2>
        <p>"Driven to apply technical expertise and project experience to develop cutting-edge solutions and support organizational success"</p>

        <div className="button-container">
          <a 
            href="https://drive.google.com/file/d/1Rvi6NK7NIHuytgIHzd0YzTUgfbHIHquZ/view?usp=sharing"
            className="btn" target="_blank" rel="noopener noreferrer"
          >
            Download CV
          </a>
          <button className="btn" onClick={scrollToContact}>
            Let's talk <FaPaperPlane className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
