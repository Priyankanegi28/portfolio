import React, { useEffect, useState } from "react";
import { FaCode, FaDownload, FaJava, FaLaptopCode, FaPaperPlane } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiReact } from "react-icons/si";
import backgroundImage from "../assets/image.png";
import "./Hero.css";

const Hero = ({ scrollToContact }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleViewAndDownload = () => {
    const viewUrl = "https://drive.google.com/file/d/1HaVB395R4sFVP-imeZAoeKJinRwYEwG_/view?usp=sharing";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1HaVB395R4sFVP-imeZAoeKJinRwYEwG_";

    window.open(viewUrl, "_blank");
    
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "Priyanka_Negi_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <header className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="greeting">Hi, I'm</span>
              <span className="name">PRIYANKA NEGI</span>
            </h1>
            <h2>
              <span className="title-icon"><FaLaptopCode /></span>
              <span className="title">Frontend Developer</span>
            </h2>
            <p className="hero-quote">
              "Driven to apply technical expertise and project experience to develop cutting-edge solutions and support organizational success"
            </p>

            <div className="tech-stack">
              <div className="tech-icons">
                <SiReact className="tech-icon" title="React" />
                <SiJavascript className="tech-icon" title="JavaScript" />
                <SiHtml5 className="tech-icon" title="HTML5" />
                <SiCss3 className="tech-icon" title="CSS3" />
                <FaJava className="tech-icon" title="Java" />
              </div>
            </div>

            <div className="button-container">
              <button className="btn download-btn" onClick={handleViewAndDownload}>
                <FaDownload className="btn-icon" /> Download Resume
              </button>
              <button className="btn contact-btn" onClick={scrollToContact}>
                Let's Connect <FaPaperPlane className="btn-icon" />
              </button>
            </div>
          </div>

          <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="code-snippet">
                  <FaCode className="code-icon" />
                  <pre>{`
  const developer = {
    name: "Priyanka Negi",
    role: "Frontend Developer",
    skills: [ "React","JavaScript", "HTML/CSS"],
    passion: "Creating beautiful,
              user-friendly interfaces"
  };`}</pre>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="code-snippet">
                  <FaCode className="code-icon" />
                  <pre>{`
  const developer = {
    name: "Priyanka Negi",
    role: "Frontend Developer",
    skills: [ "React","JavaScript", "HTML/CSS"],
    passion: "Creating beautiful,
              user-friendly interfaces"
  };`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;