import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import backgroundImage from "../assets/image.png";
import "./Hero.css";

const Hero = ({ scrollToContact }) => {
  const handleViewAndDownload = () => {
    const viewUrl = "https://drive.google.com/file/d/1KgeUDCQwCNQIehzw_7l2J2YpWM1_y_8q/view?usp=sharing";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1KgeUDCQwCNQIehzw_7l2J2YpWM1_y_8q";

    // Open the CV in a new tab for viewing
    window.open(viewUrl, "_blank");

    // Create a hidden link to trigger automatic download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Priyanka_Negi_CV.pdf"); // Set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1>PRIYANKA NEGI</h1>
        <h2><i>Frontend Developer</i></h2>
        <p>"Driven to apply technical expertise and project experience to develop cutting-edge solutions and support organizational success"</p>

        <div className="button-container">
          <button className="btn" onClick={handleViewAndDownload}>
            Download CV
          </button>
          <button className="btn" onClick={scrollToContact}>
            Let's talk <FaPaperPlane className="iconn" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;