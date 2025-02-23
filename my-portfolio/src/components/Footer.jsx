import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2 className="logo-title">PRIYANKA NEGI</h2>
          <h3 className="logo-subtitle">PORTFOLIO</h3>
        </div>

        {/* Location Section */}
        <div className="footer-section">
          <h3>Location :</h3>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Raja+Garden,+Ganpati+Dham,+Phase+2,+Laksar+Rd,+Haridwar,+Uttarakhand+249408,+India" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <p>Raja Garden, Ganpati Dham, Phase 2, Laksar Rd,</p>
            <p>Haridwar, Uttarakhand 249408, India</p>
          </a>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Reach out :</h3>
          <a href="mailto:negipriyanka949@gmail.com">negipriyanka949@gmail.com</a>
          <p><a href="tel:+918439494808">+91 8439494808</a></p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Connect :</h3>
          <div className="social-icons">
            <a href="https://github.com/Priyankanegi28" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/priyanka-negi-24924a244/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/_priyanka_negi01/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
