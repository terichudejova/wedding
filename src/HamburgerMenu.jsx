import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HamburgerMenu.css"

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
      setIsOpen(false);
    }

    useEffect(() => {
      const handleClickOutside = (event) => {
          if (navRef.current && !navRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <div className="hamburger-menu">
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav ref={navRef} className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="#kdoJsme" onClick={handleCloseMenu}>Kdo jsme</a>
          <a href="#menuLink" onClick={handleCloseMenu}>Nabídka</a>
          <a href="#contactLink" onClick={handleCloseMenu}>Kontakt</a>
        </nav>
      </div>
    );
  }