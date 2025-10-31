import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Jose Juramer Labso</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating amazing web experiences.
              Always learning, always growing.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#playlist" onClick={() => scrollToSection('playlist')}>Playlist</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Web Development</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Mobile Apps</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">UI/UX Design</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Consulting</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Maintenance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Contact Info</h4>
            <div className="footer-contact">
              <p>
                <i className="fas fa-envelope"></i>
                john.doe@email.com
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +1 (555) 123-4567
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                New York, NY
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} John Doe. All rights reserved.</p>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;