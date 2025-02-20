import React, { forwardRef } from "react";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact-section" ref={ref}>
      <div className="contact-container">
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
            <input type="tel" placeholder="153-831-1860" required />

            <label>Message</label>
            <textarea placeholder="Write your message here..." rows="4"></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-info-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27666.65643241393!2d78.06164425098655!3d29.912341300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094611d2484d2f%3A0xea492db17341191f!2sGanpati%20Dham%2C%20C-82%2C%20Kankhal%20Phase%202%2C%20near%20Matranchal%20Children%20Academy%2C%20Phase%202%2C%20Raja%20Garden%2C%20Jagjeetpur%2C%20Haridwar%2C%20Jamalpur%20Kalan%2C%20Uttarakhand%20249408%2C%20India!5e0!3m2!1sen!2sus!4v1739945179356!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            className="google-map"
          ></iframe>

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

            <div className="social-icons">
              <a href="https://github.com/Priyankanegi28" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/priyanka-negi-24924a244/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/_priyanka_negi01/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram"></i></a>
            </div>

            <h3>Location</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>  
              <a href="https://maps.app.goo.gl/U4LubnGWBm2BLHkVA" target="_blank">
              Raja Garden, Ganpati Dham, Phase 2, Laksar Rd, Haridwar, Uttarakhand 249408, India
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
