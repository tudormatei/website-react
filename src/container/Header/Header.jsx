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
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "3rem",
      }}
      className="app__header"
    >
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
      <div
        style={{
          // Container background color (you can change it to your preferred color)
          width: "50%", // Container width
          height: "0",
          paddingBottom: "50%", // Aspect ratio for a 1:1 square container
          overflow: "hidden",
          position: "relative",
          borderRadius: "50%", // Make the container a circle
          boxShadow: "0 0 40px rgba(128, 128, 128, 0.5)", // Cool grey shadow
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "50%", // Make the image itself a circle
          }}
          src={images.profile}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
