import axios from "axios";
import React, { forwardRef, useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        let timer;
        if (submitSuccess) {
            setShowMessage(true);
            timer = setTimeout(() => {
                setShowMessage(false);
                setTimeout(() => setSubmitSuccess(null), 500);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [submitSuccess]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitSuccess(null);
        setShowMessage(false);

        try {
            const response = await axios.post(
                "https://hill-elderly-sesame.glitch.me/send-email",
                formData
            );
            setSubmitSuccess(response.data.success || "Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            setSubmitSuccess("Failed to send message. Try again later.");
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-section" ref={ref} id="contact">
            <div className="contact-container">
                <div className="contact-form-container">
                    <div className="section-header">
                        <h2 className="contact-title">Get in Touch</h2>
                        <p className="subtitle">Drop Me a Message Anytime</p>
                        <div className="diivider"></div>
                    </div>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name <span className="required">*</span></label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email address <span className="required">*</span></label>
                            <input
                                type="email"
                                name="email"
                                placeholder="user@website.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone number <span className="required">*</span></label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="153-831-1860"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {submitSuccess && (
                            <div className={`submit-message ${submitSuccess.includes("Failed") ? "error" : "success"} ${showMessage ? "" : "hide"}`}>
                                {submitSuccess}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="submit-btn" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>

                <div className="contact-info-container">
                    <div className="map-container">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27666.65643241393!2d78.06164425098655!3d29.912341300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094611d2484d2f%3A0xea492db17341191f!2sGanpati%20Dham%2C%20C-82%2C%20Kankhal%20Phase%202%2C%20near%20Matranchal%20Children%20Academy%2C%20Phase%202%2C%20Raja%20Garden%2C%20Jagjeetpur%2C%20Haridwar%2C%20Jamalpur%20Kalan%2C%20Uttarakhand%20249408%2C%20India!5e0!3m2!1sen!2sus!4v1739945179356!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                            className="google-map"
                        ></iframe>
                    </div>

                    <div className="contact-info">
                        <h3 className="info-title">Contact Information</h3>
                        
                        <div className="info-item">
                            <FaPhoneAlt className="info-icon" />
                            <a href="tel:+918439494808">+91 8439494808</a>
                        </div>
                        
                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <a href="mailto:negipriyanka949@gmail.com">negipriyanka949@gmail.com</a>
                        </div>

                        <div className="social-links">
                            <a 
                                href="https://github.com/Priyankanegi28" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub className="social-icon" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/priyanka-negi-24924a244/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="social-icon" />
                            </a>
                            <a 
                                href="https://www.instagram.com/_priyanka_negi01/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="social-icon" />
                            </a>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <a 
                                href="https://maps.app.goo.gl/U4LubnGWBm2BLHkVA" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Raja Garden, Ganpati Dham, Phase 2, Laksar Rd, Haridwar, Uttarakhand 249408, India
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Contact;