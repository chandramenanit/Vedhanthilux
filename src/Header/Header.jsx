import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import "../Header/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="luxury-header">
        <div className="header-content">
          <Link to="/" className="logo">
            Vedha <span className="logo-accent">Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/AboutSection">About</Link></li>
              <li><Link className="nav-link" to="/RoomsPage">Our Rooms</Link></li>
              <li><Link className="nav-link" to="/BlogSection">Blog</Link></li>
              <li><Link className="nav-link" to="/Footer">Contact</Link></li>
            </ul>
          </nav>

          {/* Desktop Reservation Button */}
          <button className="reservation-btn desktop-reservation">
            RESERVATION
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-menu">
              <li><Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/AboutSection" className="mobile-nav-link" onClick={closeMenu}>About</Link></li>
              <li><Link to="/RoomsPage" className="mobile-nav-link" onClick={closeMenu}>Our Rooms</Link></li>
              <li><Link to="/BlogSection" className="mobile-nav-link" onClick={closeMenu}>Blog</Link></li>
              <li><Link to="/Footer" className="mobile-nav-link" onClick={closeMenu}>Contact</Link></li>
            </ul>
            <button className="mobile-reservation-btn" onClick={closeMenu}>
              RESERVATION
            </button>
          </nav>
        </div>
      </header>

      {/* The <style jsx> block can remain unchanged — so I’ve left it intact */}
    </>
  );
};

export default Header;
