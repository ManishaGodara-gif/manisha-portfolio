// src/components/Contact.jsx
import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>
          Email: <a href="mailto:manishagodara793@gmail.com"><FaEnvelope /> manishagodara793@gmail.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/ManishaGodara-gif" target="_blank" rel="noopener noreferrer"><FaGithub /> github.com/ManishaGodara-gif</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
