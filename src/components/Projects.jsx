import React, { useEffect } from "react"; // ✅ Correct


const projects = [
  {
    title: "Weather App",
    description: "A weather forecasting app built using React.js.",
    skills: ["React", "JavaScript", "CSS"],
    projectLink: "https://github.com/ManishaGodara-gif/LiveWeather",
    liveLink: "https://liveweather-ymzs.onrender.com/",
  },
  {
    title: "Task Management App",
    description: "A to-do list app with user authentication and task management.",
    skills: ["React", "CSS", "JavaScript"],
    projectLink: "https://github.com/ManishaGodara-gif/Task-Manager",
    liveLink: "https://lustrous-medovik-c974d2.netlify.app",
  },
  {
    title: "Airbnb Clone (Work in Progress)",
    description: "Aiming to build an Airbnb clone with advanced components and responsive design. The project is currently in development and will be available soon.",
    skills: ["MongoDB", "CSS", "JavaScript", "Node.js"], // Added the missing skills property
    projectLink: "#", // You may want to add the actual GitHub link here later
    liveLink: "#", // Same for the live demo link
  }
];


const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              View Live
            </a>
          </div>
          <div className="skills">
            {project.skills.map((skill, idx) => (
              <span className="skill-badge" key={idx}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
