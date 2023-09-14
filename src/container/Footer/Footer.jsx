import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
  };

  return (
    <>
      <h2 className="head-text">Contact me!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:tudormatei010@gmail.com" className="p-text">
            tudormatei010@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +40 754 225 563" className="p-text">
            +40 754 225 563
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.linkedin} alt="phone" />
          <a
            href="https://www.linkedin.com/in/tudormatei/"
            target="_blank"
            className="p-text"
          >
            tudormatei
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.github} alt="phone" />
          <a
            href="https://github.com/tudormatei"
            target="_blank"
            className="p-text"
          >
            tudormatei
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you!</h3>
        </div>
      )}
      <div className="copyright">
        <p className="p-text">@2023 Tudor</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
