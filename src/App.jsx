import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import profileImg from "./assets/profile.jpg";
import "./App.css";


function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="app">
        <section className="hero">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <h1 className="typing-text"> Hi, I'm Manisha</h1>
          <p>Full Stack Web Developer | Passionate Learner</p>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </section>

        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </motion.div>
  );
}

export default App;
