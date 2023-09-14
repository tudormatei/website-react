import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";

const abouts = [
  {
    title: "Artificial Intelligence",
    description: "I am specialising on AI and machine learning.",
    imgUrl: images.ai,
  },
  {
    title: "Software Engineering",
    description: "I developed web and mobile applications.",
    imgUrl: images.softwareEngineer,
  },
  {
    title: "Game Development",
    description: "I have published games on google play store.",
    imgUrl: images.gameDevelopment,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I am constantly learning new
        <br />
        <span> Technologies</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
