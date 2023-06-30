import React, { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [emailFrom, setEmailFrom] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    Email.send({
      SecureToken: "d010849c-9ae0-462d-9e46-ee5248318fee",
      From: `${emailFrom}`,
      To: "grigoroscuta.sergiu@yahoo.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert(message));
  }

  return (
    <footer id="contact" className="portfolio__footer">
      <div className="portfolio__footer-container">
        <div className="portfolio__footer-contact">
          <p className="portfolio__footer-contact-text">Let's Get In Touch</p>
          <form
            id="contact-form"
            onSubmit={(e) => {
              sendEmail(e);
            }}
            className="portfolio__footer-form"
          >
            <input
              className="portfolio__footer-input"
              type="text"
              placeholder="Name"
            />
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setEmailFrom(e.target.value);
              }}
              className="portfolio__footer-input"
            />
            <textarea
              style={{ resize: "none" }}
              rows="10"
              placeholder="Message"
              type="message"
              className="portfolio__footer-input"
            />
          </form>
          <button
            form="contact-form"
            className="portfolio__footer-submit-btn"
            type="submit"
          >
            SEND
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
