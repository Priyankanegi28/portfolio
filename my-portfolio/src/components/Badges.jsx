import React from "react";
import aiBadge from "../assets/ai.png";
import androidBadge from "../assets/android.jpg";
import awsBadge from "../assets/aws.png";
import blockchainBadge from "../assets/block.png";
import cybersecurityBadge from "../assets/cybersecurity.png";
import ethicalBadge from "../assets/ethical.jpeg";
import generativeBadge from "../assets/generative.png";
import informationBadge from "../assets/information.png";
import internetBadge from "../assets/internet.png";
import webBadge from "../assets/web.png";
import "./Badges.css";

const badgesData = [
  {
    id: 1,
    title: "Artificial Intelligence",
    image: aiBadge,
    link: "https://drive.google.com/file/d/1G7fVcIZJR2XpNTXvSUbX6yzRpHhbjp1m/view?usp=sharing"
  },
  {
    id: 2,
    title: "Android Application",
    image: androidBadge,
    link: "https://drive.google.com/file/d/1QrDa3DYtSgBFQunl-yut03XWuaEcnEWr/view?usp=sharing"
  },
  {
    id: 3,
    title: "Blockchain",
    image: blockchainBadge,
    link: "https://drive.google.com/file/d/1doHgEwPWHgbOaKI1tNI2i7XRO_-ey_Z8/view?usp=sharing"
  },
  {
    id: 4,
    title: "Cybersecurity",
    image: cybersecurityBadge,
    link: "https://drive.google.com/file/d/1zug-UO4NjDi8k9KWrN4DkRmB_xNfSaw0/view?usp=sharing"
  },
  {
    id: 5,
    title: "Ethical Hacking",
    image: ethicalBadge,
    link: "https://drive.google.com/file/d/1EMql6NGU6ClJrU7_yFjPH3xVcap9Qh5B/view?usp=sharing"
  },
  {
    id: 6,
    title: "Internet of Things",
    image: internetBadge,
    link: "https://drive.google.com/file/d/1SPU0wQQ4I9agunlbWqVmN2NJa_76K2YA/view?usp=sharing"
  },
  {
    id: 7,
    title: "Generative AI",
    image: generativeBadge,
    link: "https://drive.google.com/file/d/1TREPbCKQ7DoJELIw8jgE3moDWigSwOSj/view?usp=sharing"
  },
  {
    id: 8,
    title: "Information Technology",
    image: informationBadge,
    link: "https://drive.google.com/file/d/1Fio1KgV-LGLKk_QThqMdieKZL_Q3ccbE/view?usp=sharing"
  },
  {
    id: 9,
    title: "Web Development",
    image: webBadge,
    link: "https://drive.google.com/file/d/1TfLGAEDvDm_2yCSo4VfDHKTvwYqh3erZ/view?usp=sharing"
  },
  {
    id: 10,
    title: "AWS Cloud",
    image: awsBadge,
    link: "https://drive.google.com/file/d/15iorOjc-jpS1p-oIXBczy4inwWtfXwX2/view?usp=sharing"
  }
];

const Badges = () => {
  return (
    <section className="badges-section" id="certifications">
      <div className="badges-header">
        <h2 className="badges-title">Certifications & Badges</h2>
        <p className="badges-subtitle">
          Celebrating my achievements and continuous learning journey
        </p>
        <div className="divideer"></div>
      </div>

      <div className="badges-container">
        {badgesData.map((badge) => (
          <div className="badge-card" key={badge.id}>
            <div className="badge-image-container">
              <img 
                src={badge.image} 
                alt={badge.title} 
                className="badge-image"
                loading="lazy"
              />
            </div>
            <h3 className="badge-title">{badge.title}</h3>
            <a 
              href={badge.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="badge-link"
            >
              View Certificate
              <span className="link-icon">→</span>
            </a>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <a 
          href="https://www.linkedin.com/in/priyanka-negi-24924a244/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="view-more-btn"
        >
          View All Certifications on LinkedIn
          <svg className="linkedin-icon" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Badges;