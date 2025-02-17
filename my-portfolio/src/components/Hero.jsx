import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing the icon
import backgroundImage from "../assets/image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1>PRIYANKA NEGI</h1>
        <h2><i>Frontend Developer</i></h2>
        <p>"Driven to apply technical expertise and project experience to develop cutting-edge solutions and support organizational success"</p>

        <div className="button-container">
          <a href="#" className="btn">Download CV</a>
          <a href="#" className="btn">
            Let's talk <FaPaperPlane className="icon" /> {/* Icon added */}
          </a>
        </div>

      </div>
    </header>
  );
};

export default Hero;
