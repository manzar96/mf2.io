import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h3 className="contact-title">💬 Contact</h3>
        
        <p className="contact-text">
          For questions❓, collaborations 🤝, or to add your model to the MF2 leaderboard 🏆, please reach out at{' '}
          <a 
            href="mailto:emmanouil.zaranis@tecnico.ulisboa.pt?subject=MF2 Inquiry" 
            className="contact-email"
          >
            emmanouil.zaranis@tecnico.ulisboa.pt
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

