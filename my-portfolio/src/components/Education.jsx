import React from 'react';
import schoolLogo from '../assets/shri.jpg';
import utuLogo from '../assets/utu.png';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <h1 className="titleenew">EDUCATIONAL QUALIFICATIONS</h1>
      </div>
      
      {/* B.Tech Section */}
      <div className="education-section">
        <div className="education-details">
          <div className="education-title-box">
            <h1>Bachelor of Technology</h1>
            <h2>Computer Science and Engineering</h2>
            <span className="education-year">2021-2025</span>
          </div>
          <div className="education-info">
            <p><strong>INSTITUTION:</strong> <a href="https://huroorkee.ac.in/" target="_blank" rel="noopener noreferrer">Roorkee College Of Engineering, Roorkee</a></p>
            <p><strong>UNIVERSITY:</strong> <a href="https://uktech.ac.in/en" target="_blank" rel="noopener noreferrer">Uttarakhand Technical University, Dehradun</a></p>
            <p><strong>CGPA:</strong> <span className="grade-highlight">8.04</span></p>
          </div>
        </div>
        <div className="education-logo">
          <a href="https://uktech.ac.in/en" target="_blank" rel="noopener noreferrer">
            <img src={utuLogo} alt="University Logo" className="logoo" />
          </a>
        </div> 
      </div>
      
      <div className="divider"></div>

      {/* Intermediate Section */}
      <div className="education-section">
        <div className="education-details">
          <div className="education-title-box">
            <h1>Intermediate</h1>
            <span className="education-year">2020-2021</span>
          </div>
          <div className="education-info">
            <p><strong>INSTITUTION:</strong> <a href="http://www.sgrrharidwar.com/" target="_blank" rel="noopener noreferrer">Shri Guru Ram Rai Public School, Haridwar</a></p>
            <p><strong>BOARD:</strong> C.B.S.E</p>
            <p><strong>PERCENTAGE:</strong> <span className="grade-highlight">79%</span></p>
          </div>
        </div>
        <div className="education-logo">
          <a href="http://www.sgrrharidwar.com/" target="_blank" rel="noopener noreferrer">
            <img src={schoolLogo} alt="School Logo" className="logoo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;