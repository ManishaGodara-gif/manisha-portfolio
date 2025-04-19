// src/components/Education.jsx
import React from "react";

function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">🎓 Education</h2>
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>High School (2018–2020)</h3>
            <p>Prerna Senior Secondary School, Sirsa, Haryana</p>
            <p>CGPA: <strong>9.2</strong></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Secondary School (2020–2022)</h3>
            <p>Bala Ji Public School, Bhattu Mandi, Haryana</p>
            <p>Stream: Science (PCM)</p>
            <p>CGPA: <strong>9.7</strong></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>B.Tech in Computer Science Engineering (2022–2026)</h3>
            <p>Ch. Devi Lal State Institute of Engineering and Technology, Sirsa</p>
            <p>Current CGPA: <strong>8.7</strong></p>
          </div>
        </div>

      </div>

      <h2 className="section-title">📜 Certifications</h2>
      <ul className="list">
        <li>Frontend Development - Coding Block</li>
      </ul>

      <h2 className="section-title">🏆 Achievements</h2>
      <ul className="list">
        <li>Tech Event Organizer Certification by Club of College University</li>
        <li>Merit Holder in 12th Standard</li>
      </ul>
    </section>
  );
}

export default Education;
