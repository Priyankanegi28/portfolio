import React from 'react';
import schoolLogo from '../assets/shri.jpg';
import utuLogo from '../assets/utu.png';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <h1>EDUCATIONAL QUALIFICATIONS</h1>
      </div>
      
      {/* B.Tech Section */}
      <div className="education-section">
        <div className="education-details">
          <h1>Bachelor of Technology</h1>
          <h2>Computer Science and Engineering</h2>
          <p>2021-2025</p>
          <p><strong>INSTITUTION:</strong> <a href="https://huroorkee.ac.in/" target="_blank">Roorkee College Of Engineering, Roorkee</a></p>
          <p><strong>UNIVERSITY:</strong> <a href="https://uktech.ac.in/en" target="_blank">Uttarakhand Technical University, Dehradun</a></p>
          <p><strong>CGPA:</strong> 7.9</p>
        </div>
        <div className="education-logo">
          <img src={utuLogo} alt="University Logo" className="logoo" />
        </div> 
      </div>
      <hr />

      {/* Intermediate Section */}
      <div className="education-section">
        <div className="education-details">
          <h1>Intermediate</h1>
          <p>2020-2021</p>
          <p><strong>INSTITUTION:</strong> <a href="#">Shri Guru Ram Rai Public School, Haridwar</a></p>
          <p><strong>BOARD:</strong> C.B.S.E</p>
          <p><strong>PERCENTAGE:</strong> 79%</p>
        </div>
        <div className="education-logo">
          <img src={schoolLogo} alt="School Logo" className="logoo" />
        </div>
      </div>
    </div>
  );
};

export default Education;
