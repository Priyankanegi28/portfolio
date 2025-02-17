import React from "react";
import "./Badges.css"; // Import the CSS file

// Ensure you have the correct paths for images
import { default as alteryxBadge, default as cybersecurityBadge, default as dataAnalyticsBadge, default as ibmPythonBadge, default as ibmVisualizationBadge } from "../assets/cybersecurity.png";

const Badges = () => {
  return (
    <section className="badges-section">
      <h2 className="badges-title">BADGES AND CREDENTIALS</h2>
      <p className="badges-subtitle"><i>Celebrating my achievements and milestones</i></p>
      <div className="underline"></div>

      <div className="badges-container">
        <div className="badge-card">
          <img src={cybersecurityBadge} alt="Google Cybersecurity" />
          <p>Google Cybersecurity</p>
          <a href="#" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={dataAnalyticsBadge} alt="Google Data Analytics" />
          <p>Google Data Analytics</p>
          <a href="#" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={alteryxBadge} alt="Alteryx Foundation" />
          <p>Alteryx Foundation</p>
          <a href="#" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={ibmPythonBadge} alt="IBM Data Analysis with Python" />
          <p>IBM Data Analysis with Python</p>
          <a href="#" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={ibmVisualizationBadge} alt="IBM Data Visualization" />
          <p>IBM Data Visualization</p>
          <a href="#" className="view-link">View</a>
        </div>
        <div className="badge-card">
          <img src={ibmVisualizationBadge} alt="IBM Data Visualization" />
          <p>IBM Data Visualization</p>
          <a href="#" className="view-link">View</a>
        </div>
        <div className="badge-card">
          <img src={ibmVisualizationBadge} alt="IBM Data Visualization" />
          <p>IBM Data Visualization</p>
          <a href="#" className="view-link">View</a>
        </div>
      </div>
    </section>
  );
};

export default Badges;
