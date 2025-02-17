import React from "react";
import profileImage from "../assets/image.png"; // Ensure correct path to the image
import "./ProfessionalJourney.css"; // Import the CSS file

const ProfessionalJourney = () => {
  return (
    <section className="professional-journey">
      <div className="content">
        <h2 className="title">ABOUT ME</h2>
        <p className="subtitle"><i>Showcasing skills and achievements</i></p>
        <div className="underline"></div>

        <ul className="journey-list">
          <li>
            Motivated Computer Science Engineering student with expertise in
            Python, C, C++, and Java, alongside skills in web and app
            development, cybersecurity, and data science.
          </li>
          <li>
            Experienced in building innovative projects like email automation
            tools and keylogger applications, with internships at Google for
            Developers and Uma Robotics.
          </li>
          <li>
            Proficient in tools like Git, Figma, and Android Studio, and
            certified in Data Analytics, Cybersecurity, and Network Security.
          </li>
          <li>
            Adept at problem-solving, team collaboration, and delivering
            impactful results in technical roles.
          </li>
        </ul>

      </div>

      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default ProfessionalJourney;
