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
            Passionate <span className="highlight">Full Stack Developer and UI/UX Designer</span> dedicated to building seamless, scalable, and visually engaging web experiences — proficient in 
            <span className="highlight"> HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB</span>, with a strong focus on intuitive, user-centered design.
          </li>
          <li>
            Experienced in developing projects like <span className="highlight">Book Management Application</span>, <span className="highlight">E-Commerce Store</span>, with internships at <span className="highlight">EduSkills</span> and <span className="highlight">IBM SkillsBuild</span>.
          </li>
          <li>
            Proficient in tools like <span className="highlight">Git</span>, <span className="highlight">Canva</span>, and
            certified in <span className="highlight">Cybersecurity</span>, <span className="highlight">Generative AI</span>, and <span className="highlight">AWS Cloud</span>.
          </li>
          <li>
            Skilled in <span className="highlight">problem-solving</span>, <span className="highlight">team collaboration</span>, and developing efficient, full-stack solutions that deliver impactful user experiences.
          </li>
        </ul>

        <div className="tech-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Java</span>
          <span>Python</span>
          <span>Figma</span>
          <span>Git</span>
          <span>Github</span>
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
