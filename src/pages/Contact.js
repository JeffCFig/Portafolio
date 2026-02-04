import React from "react";
import "../Styles/Contact.css";
import { SiGmail, SiWhatsapp, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <section className="modern-contact" id="contact">
      <div className="contact-card">
        <h2>Contacto</h2>
        <p className="contact-desc">
          ¿Tienes una idea, proyecto o propuesta?
        </p>
        <p className="contact-desc">Escríbeme directamente:</p>
        <div className="contact-social">
          <a href="mailto:jcaguafigueroa9907@gmail.com" className="contact-social-link" title="Email">
            <SiGmail className="contact-icon" /> Email
          </a>
          <a href="https://wa.link/3sqzkl" className="contact-social-link" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <SiWhatsapp className="contact-icon" /> WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/jefferson-cagua-figueroa/" className="contact-social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <SiLinkedin className="contact-icon" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;