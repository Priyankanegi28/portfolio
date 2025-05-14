import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCertificate, FaTimes } from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    id: 4,
    title: "Masai School",
    duration: "October, 2024 - Completed",
    description: "6-month full-stack web development internship at Masai School. Building real-world projects using React, Firebase, and modern web technologies while honing problem-solving and collaboration skills.",
    details: "This Masai School internship is a hands-on learning experience where I am working on building real-world projects using HTML, CSS, JavaScript, React, Glitch, and Firebase. The program emphasizes problem-solving, collaboration, and industry-relevant skills. I am gaining expertise in front-end development, responsive design, state management in React, and backend integration with Firebase.",
    skills: "HTML, CSS, JavaScript, React, Glitch, Firebase, Responsive Design, Version Control (Git)",
    grade: "Performance evaluation is ongoing, with consistent progress and positive feedback on project submissions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNckH5q7N4sJXIllDAKUsBdO8jwmxaNMVrrw&s",
  },
  {
    id: 1,
    title: "EduSkills",
    duration: "July, 2024 - Sep, 2024",
    description: "Generative AI intern at EduSkills (AICTE NEAT) with Google. Developed AI content, fine-tuned models, and integrated generative AI, gaining expertise in prompt engineering and AI ethics.",
    details: "This EduSkills internship under AICTE NEAT, supported by Google for Developers, provided hands-on experience in Generative AI. I worked on AI-driven content creation, fine-tuning language models, and integrating generative AI into applications, gaining expertise in prompt engineering, deep learning, and AI ethics.",
    skills: "Python, TensorFlow, PyTorch, Generative AI, NLP, Deep Learning",
    grade: "Achieved an 'Excellent' grade, reflecting my dedication and proficiency throughout the program.",
    image: "https://media.licdn.com/dms/image/v2/C560BAQH827651PNzYw/company-logo_200_200/company-logo_200_200/0/1630649828607/eduskillsfoundation_logo?e=2147483647&v=beta&t=TSHlzoiIAkJVOP2IHchTTU7VB-1gWWsrq0utokz8B4w",
    certificate: "https://drive.google.com/file/d/11WCHtIscVFT8rlRGWl7k2s1pYxio0CJn/view?usp=sharing"
  },
  {
    id: 2,
    title: "EduSkills",
    duration: "Apr, 2024 - Jun, 2024",
    description: "Android development internship at EduSkills (AICTE NEAT) with Google. Built efficient Android apps using Java/Kotlin through hands-on projects, strengthening mobile development expertise.",
    details: "This internship, provided by EduSkills Foundation under the AICTE NEAT program and supported by Google for Developers, equipped me with advanced Android development skills. I worked on hands-on projects to design and build efficient Android applications, further solidifying my expertise in Java and Kotlin.",
    skills: "Android Studio, Kotlin, Java, Firebase",
    grade: "Achieved an 'Excellent' grade, reflecting my dedication and proficiency throughout the program.",
    image: "https://media.licdn.com/dms/image/v2/C560BAQH827651PNzYw/company-logo_200_200/company-logo_200_200/0/1630649828607/eduskillsfoundation_logo?e=2147483647&v=beta&t=TSHlzoiIAkJVOP2IHchTTU7VB-1gWWsrq0utokz8B4w",
    certificate: "https://drive.google.com/file/d/1gaY-PO9UgkXLn7LzdB5aoVvGmt3kOILc/view?usp=sharing"
  },
  {
    id: 3,
    title: "IBM SkillsBuild | AICTE",
    duration: "June 12, 2023 - July 24, 2023",
    description: "Frontend development internship with AICTE & Edunet Foundation. Built interactive web apps using modern technologies while mastering industry best practices",
    details: "This internship, conducted in collaboration with AICTE and Edunet Foundation, provided hands-on training in Front End Development. I gained expertise in building interactive web applications using modern web technologies and industry best practices.",
    skills: "HTML, CSS, JavaScript, React, IBM SkillsBuild",
    grade: "Certificate of Completion awarded by Edunet Foundation.",
    image: "https://mlmzwlxpr5yp.i.optimole.com/cb:wJGC.2dace/w:864/h:540/q:mauto/f:best/https://www.muonline.ac.in/blog/wp-content/uploads/2023/10/AICTE-Accreditation.jpg",
    certificate: "https://drive.google.com/file/d/16aPiS3kmQr1l5N9DkfD-ZKC7jsduzRWm/view?usp=sharing"
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedExperience]);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">Where I've worked and what I've learned</p>
          <div className="dividerr"></div>
        </motion.div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="experience-card"
            >
              <div className="card-header">
                <div className="company-logo">
                  <img src={exp.image} alt={exp.title} />
                </div>
                <div className="company-info">
                  <h3>{exp.title}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
              </div>
              <div className="card-body">
                <p>{exp.description}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedExperience(exp)}
                  className="learn-more-btn"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-left">
                <div className="modal-logo-container">
                  <img src={selectedExperience.image} alt={selectedExperience.title} className="modal-logo" />
                </div>
                <div className="modal-certificate">
                  {selectedExperience.certificate && (
                    <a 
                      href={selectedExperience.certificate} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="certificate-btn"
                    >
                      <FaCertificate /> View Certificate
                    </a>
                  )}
                </div>
              </div>
              <div className="modal-right">
                <div className="modal-header">
                  <h2>{selectedExperience.title}</h2>
                  <span className="modal-duration">{selectedExperience.duration}</span>
                  <FaTimes 
                    className="close-btn" 
                    onClick={() => setSelectedExperience(null)} 
                  />
                </div>
                <div className="modal-body">
                  <div className="modal-section">
                    <h4>About the Experience</h4>
                    <p>{selectedExperience.details}</p>
                  </div>
                  <div className="modal-section">
                    <h4>Skills Gained</h4>
                    <div className="skills-container">
                      {selectedExperience.skills.split(', ').map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  {selectedExperience.grade && (
                    <div className="modal-section">
                      <h4>Achievements</h4>
                      <p className="grade">{selectedExperience.grade}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;