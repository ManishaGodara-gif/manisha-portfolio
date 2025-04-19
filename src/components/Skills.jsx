// src/components/Skills.jsx
import React from "react";

function Skills() {
  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Vite"],
    "Backend": ["Node.js", "Express.js"],
    "Programming Languages": ["C", "C++", "Python", "Java"],
    "Databases": ["MongoDB", "SQL", "DBMS"],
    "Version Control": ["Git", "GitHub"]
  };

  return (
    <section className="section" id="skills">
      <h2 className="section-title">🛠️ Skills</h2>
      <div className="timeline">
        {Object.keys(skills).map((category, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{category}</h3>
              <div className="skills-list">
                {skills[category].map((skill, idx) => (
                  <span className="skill-badge" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
