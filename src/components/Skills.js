import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "fab fa-react" },
        { name: "JavaScript", level: 85, icon: "fab fa-js-square" },
        { name: "HTML/CSS", level: 95, icon: "fab fa-html5" },
        { name: "TypeScript", level: 80, icon: "fas fa-code" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "fab fa-node-js" },
        { name: "Python", level: 80, icon: "fab fa-python" },
        { name: "Express.js", level: 85, icon: "fas fa-server" },
        { name: "MongoDB", level: 75, icon: "fas fa-database" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, icon: "fab fa-git-alt" },
        { name: "Docker", level: 70, icon: "fab fa-docker" },
        { name: "AWS", level: 65, icon: "fab fa-aws" },
        { name: "Figma", level: 75, icon: "fab fa-figma" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <i className={skill.icon}></i>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;