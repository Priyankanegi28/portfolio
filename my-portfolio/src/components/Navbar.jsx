import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToHero, scrollToAbout, scrollToWork, scrollToContact, scrollToEducation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo" onClick={scrollToHero}>
          <span className="first-name">PRIYANKA</span>
          <span className="last-name">NEGI</span>
        </div>

        <button 
          className={`menu-icon ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>

        <ul ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToHero(); closeMenu(); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout(); closeMenu(); }}>
              About
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollToEducation(); closeMenu(); }}>
              Education
            </a>
          </li>
          <li>
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollToWork(); closeMenu(); }}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); closeMenu(); }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;