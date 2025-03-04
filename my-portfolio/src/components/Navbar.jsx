import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToHero, scrollToAbout, scrollToWork, scrollToContact, scrollToEducation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for detecting outside clicks

  // Function to close the menu
  const closeMenu = () => setMenuOpen(false);

  // Click outside menu to close it
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
    <nav className="navbar">
      <div className="container">
        <div className="logo">PRIYANKA NEGI</div>

        {/* Hamburger Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navbar Links */}
        <ul ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToHero(); closeMenu(); }}>HOME</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout(); closeMenu(); }}>ABOUT</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToEducation(); closeMenu(); }}>EDUCATION</a></li>
          <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToWork(); closeMenu(); }}>WORK</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); closeMenu(); }}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
