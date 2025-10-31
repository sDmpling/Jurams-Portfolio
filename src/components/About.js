import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm Jose Juramer Labso</h3>
            <p>
              I'm a simple guy who enjoys the little things 
              — especially making and drinking coffee. 
              Music has always been a part of my life, 
              and I express that through playing the drums. 
              Outside of tech, I serve as a youth leader in our church, 
              where I've learned the importance of patience, leadership, 
              and compassion when working with others.
            </p>
            <p>
              I'd describe myself as a jack-of-all-trades 
              — someone who enjoys learning and doing a bit of everything. 
              Whether it's cooking, baking, doing yard work, or tackling hands-on tasks,
              I love figuring things out and making them work. 
              The same mindset extends to my IT background, where I've gained experience
              in networking, databases, and programming. 
              Lately, I've been focusing on improving my skills in cybersecurity 
              as I continue to grow both personally and professionally.
            </p>

            {/* <div className="stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Happy Clients</p>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;