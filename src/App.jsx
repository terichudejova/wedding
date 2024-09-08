import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';



function App() {

  //Hamburger Menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //Pozadí pro wide navbar při scrollování
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false)
    };
  }

      // Přidání event listeneru při načtení komponenty
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Čištění event listeneru při odchodu z komponenty
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    <div>
      <ScrollToTop />
      <nav className={`nav ${isOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <NavLink to="/wedding/" className="navLink" id='homeLink' onClick={toggleMenu}>Domů</NavLink>
          <NavLink to="/wedding/place" className="navLink" onClick={toggleMenu}>Kdy a kde</NavLink>
          <NavLink to="/wedding/about" className="navLink" onClick={toggleMenu}>Náš příběh</NavLink>
          <NavLink to="/wedding/qanda" className="navLink" onClick={toggleMenu}>Časté otázky</NavLink>
          <NavLink to="/wedding/contact" className="navLink" onClick={toggleMenu}>Napiš nám</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
