import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.scss";

const Footer = () => {
  const [emailFrom, setEmailFrom] = useState("");
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_YOUR_SERVICE_ID,
        import.meta.env.VITE_REACT_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <footer id="contact" className="portfolio__footer">
      <div className="portfolio__footer-container">
        <div className="portfolio__footer-contact">
          <p className="portfolio__footer-contact-text">Let's Get In Touch</p>
          <form
            ref={form}
            id="contact-form"
            onSubmit={(e) => {
              sendEmail(e);
            }}
            className="portfolio__footer-form"
          >
            <input
              className="portfolio__footer-input"
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              name="user_email"
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setEmailFrom(e.target.value);
              }}
              className="portfolio__footer-input"
            />
            <textarea
              name="message"
              style={{ resize: "none" }}
              rows="10"
              placeholder="Message"
              type="message"
              className="portfolio__footer-input"
            />
          </form>
          <button
            value={"Send"}
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
