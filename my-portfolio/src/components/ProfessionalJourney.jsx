import React, { useEffect, useState } from "react";
import profileImage from "../assets/image1.gif";
import "./ProfessionalJourney.css";

const ProfessionalJourney = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section className={`professional-journey ${animated ? 'animated' : ''}`}>
      <div className="content">
        <h2 className="titlee">ABOUT ME</h2>
        <p className="subtitle"><i>Showcasing skills and achievements</i></p>
        <div className="underline"></div>

        <ul className="journey-list">
          <li>
             Driven <span className="highlight">frontend developer and UI/UX designer</span> dedicated to crafting seamless, visually captivating web experiences proficient in<span className="highlight"> HTML, CSS, JavaScript, and React </span>with a strong emphasis on intuitive, user-centered design.
          </li>
          <li>
            Experienced in developing projects like <span className="highlight">Book Management Application</span>, <span className="highlight">E-Commerce Store</span>, and an <span className="highlight">Image Gallery Application</span>, with internships at <span className="highlight">EduSkills</span> and <span className="highlight">IBM Skillsbuild</span>.
          </li>
          <li>
            Proficient in tools like <span className="highlight">Git</span>, <span className="highlight">Figma</span>, and <span className="highlight">Canva</span> and
            certified in <span className="highlight">Cybersecurity</span>, <span className="highlight">Generative AI</span>, <span className="highlight">AWS Cloud</span>.
          </li>
          <li>
            Skilled in <span className="highlight">problem-solving</span>, <span className="highlight">teamwork</span>, and creating efficient, user-centric technical solutions.
          </li>
        </ul>

        <div className="tech-tags">
          <span>Python</span>
          <span>Java</span>
          <span>React</span>
          <span>Web Dev</span>
          <span>Cybersecurity</span>
          <span>Github</span>
          <span>Git</span>
        </div>
      </div>

      <div className="profile-image">
        <div className="image-wrapper">
          <img src={profileImage} alt="Profile" />
          <div className="glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;