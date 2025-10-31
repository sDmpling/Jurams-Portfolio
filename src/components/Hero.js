import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%),
          url('/images/Background.png')
        `
      }}
    >
      <div className="container">
        <div className="hero-content">
          <div className="profile-circle">
            <img
              src="/images/profile.jpg"
              alt="Jose Juramer Labso"
              className="profile-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-fallback" style={{display: 'none'}}>
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Jose Juramer Labso</span>
            </h1>
            <h2 className="hero-subtitle">DevOps Platform Engineer</h2>
            <p className="hero-description">
              As a DevOps Platform Engineer, I work on building and maintaining the systems that
              keep development and deployment running smoothly. I focus on automation, scalability, and reliability
              — making sure that applications are delivered efficiently and perform at their best.
            </p>
            <div className="hero-buttons">
              <button
                className="btn"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;