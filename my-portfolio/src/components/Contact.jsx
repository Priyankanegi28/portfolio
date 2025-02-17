import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Form */}
        <div className="contact-form-container">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="subtitle"><i>Drop Me a Message Anytime</i></p>
          <div className="underline"></div>
          <form className="contact-form">
            <label>Name <span>*</span></label>
            <input type="text" placeholder="Full Name" required />

            <label>Email address <span>*</span></label>
            <input type="email" placeholder="user@website.com" required />

            <label>Phone number <span>*</span></label>
            <input type="tel" placeholder="987-654-3210" required />

            <label>Message</label>
            <textarea placeholder="Write your message here..." rows="4"></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Right Side - Map and Contact Details */}
        <div className="contact-info-container">
          {/* Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2024.54885265344!2d77.92433630700559!3d29.90821082384953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb4cc97684d45%3A0xa1eac9ce26690c1b!2sHaridwar%20University!5e0!3m2!1sen!2sus!4v1739728651557!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            className="google-map"
          ></iframe>

          {/* Contact Details */}
<div className="contact-info">
  <h3>Get in touch</h3>
  <p>
    <i className="fas fa-phone-alt"></i> 
    <a href="tel:+918439494808"> +91 8439494808</a>
  </p>
  <p>
    <i className="fas fa-envelope"></i> 
    <a href="mailto:negipriyanka949@gmail.com"> negipriyanka949@gmail.com</a>
  </p>

  {/* Social Media Icons */}
  <div className="social-icons">
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="#"><i className="fab fa-linkedin-in"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
  </div>

  <h3>Location</h3>
  <p>
    <i className="fas fa-map-marker-alt"></i>  
    <a href="https://maps.app.goo.gl/XmptwLa3rbpCfd5b6" target="_blank">
      Haridwar University, Bajuhari, Roorkee, Uttarakhand 247667, IN
    </a>
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
