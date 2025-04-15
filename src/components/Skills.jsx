// src/components/Skills.jsx
import React from "react";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB",
    "SQL", "Git", "GitHub", "Bootstrap", "Tailwind CSS", "Vite"
  ];

  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <span className="skill-badge" key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
