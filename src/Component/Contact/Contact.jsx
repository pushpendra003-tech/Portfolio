import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>Feel free to get in touch with me!</p>
          <ul>
            <li>Email: <a href="mailto:pushpendra441240@gmail.com">pushpendra441240@gmail.com</a></li>
            <li>Phone: <a href="tel:+91-1234567890">+91-6398441240</a></li>

          </ul>
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/f/yourFormID" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
