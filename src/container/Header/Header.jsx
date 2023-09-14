import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import Typical from "react-typical";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 25 }}>
              <p className="p-text">Hello, I am</p>
              <h1>Tudor</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">
              I am a
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[" Student", 2500, " Programmer", 2500]}
                className="p-text"
              />
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
