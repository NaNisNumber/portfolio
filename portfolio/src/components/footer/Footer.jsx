import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "./Footer.scss";

const Footer = () => {
  const [formUserName, setFormUserName] = useState("");
  const [formUserEmail, setFormUserEmail] = useState("");
  const [formUserMessage, setFormUserMessage] = useState("");
  const [messageWasSent, setMessageWasSent] = useState("");
  const [formStatusCode, setFormStatusCode] = useState();
  const form = useRef(null);
  const messageWasSentRef = useRef(null);

  (function () {
    emailjs.init({
      publicKey: "4fLKB3P93aUM1yNV2",
    });
  })();

  function resetForm() {
    setFormUserName("");
    setFormUserEmail("");
    setFormUserMessage("");
  }

  function formValidation() {
    let isValid = false;
    if (formUserEmail == "" || formUserName == "" || formUserMessage == "") {
      isValid = false;
    } else {
      isValid = true;
    }
    return isValid;
  }

  function sendEmail(e) {
    e.preventDefault();

    const formIsValid = formValidation();
    if (!formIsValid) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_YOUR_SERVICE_ID,
        import.meta.env.VITE_REACT_YOUR_TEMPLATE_ID,
        form.current,
        '4fLKB3P93aUM1yNV2'
      )
      .then(
        (result) => {
          if (result.status === 200) {
            resetForm();
            messageWasSentRef.current.style.backgroundColor = "green";
            setMessageWasSent("Your message was sent with success !");
            setFormStatusCode(200);
          }
        },
        (error) => {
          console.log(error);
          messageWasSentRef.current.style.backgroundColor = "red";
          setFormStatusCode(error.status);
          setMessageWasSent(
            `Something happened, your message couldn't be sent:error ${error.status}`
          );
        }
      );
  }

  useEffect(() => {
    if (formStatusCode === null) return;
    if (formStatusCode == 200) {
      messageWasSentRef.current.classList.add(
        "portfolio__footer-contact-message-sent-text--toggle"
      );
    } else if (formStatusCode != 200 && formStatusCode != null) {
      messageWasSentRef.current.classList.add(
        "portfolio__footer-contact-message-sent-text--toggle"
      );
    }

    messageWasSentRef.current.addEventListener(
      "animationend",
      function onAnimationEnd() {
        messageWasSentRef.current.removeEventListener(
          "animationend",
          onAnimationEnd
        );
        messageWasSentRef.current.classList.remove(
          "portfolio__footer-contact-message-sent-text--toggle"
        );
      }
    );
    setFormStatusCode(null);
  }, [formStatusCode]);

  return (
    <footer id="contact" className="portfolio__footer">
      <div className="portfolio__footer-container">
        <div className="portfolio__footer-contact">
          <p
            ref={messageWasSentRef}
            className="portfolio__footer-contact-message-sent-text"
          >
            {messageWasSent}
          </p>

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
              onChange={(e) => {
                const value = e.target.value;
                setFormUserName(value);
              }}
              value={formUserName}
              className="portfolio__footer-input"
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              value={formUserEmail}
              name="user_email"
              placeholder="Email"
              type="email"
              onChange={(e) => {
                const value = e.target.value;
                setFormUserEmail(value);
              }}
              className="portfolio__footer-input"
            />
            <textarea
              value={formUserMessage}
              onChange={(e) => {
                const value = e.target.value;
                setFormUserMessage(value);
              }}
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
