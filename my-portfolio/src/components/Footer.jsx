import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2 className="logo-title">PRIYANKA <span>NEGI</span></h2>
          <p className="logo-subtitle">Full Stack Developer</p>
        </div>

        {/* Location Section */}
        <div className="footer-section">
          <h3 className="section-titlee">Location</h3>
          <div className="section-content">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <a 
                href="https://maps.app.goo.gl/UESvAdUQp3GfHxyh9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="info-link"
              >
              
                <p>Haridwar,</p>
                <p>Uttarakhand , India</p>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="section-titlee">Contact</h3>
          <div className="section-content">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <a href="mailto:negipriyanka949@gmail.com" className="info-link">
                negipriyanka949@gmail.com
              </a>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <a href="tel:+918439494808" className="info-link">
                +91 8439494808
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="section-titlee">Connect</h3>
          <div className="social-links">
            <a 
              href="https://github.com/Priyankanegi28" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/priyanka-negi-24924a244/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedinIn className="social-icon" />
            </a>
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Priyanka Negi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;