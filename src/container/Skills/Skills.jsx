import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Skills.scss";

const skills = [
  { title: "Python", imgUrl: images.python },
  { title: "Tensorflow", imgUrl: images.tensorflow },
  { title: "Flask", imgUrl: images.flask },
  { title: "C-Sharp", imgUrl: images.csharp },
  { title: "Java", imgUrl: images.java },
  { title: "Spring", imgUrl: images.springBoot },
  { title: "gRPC", imgUrl: images.grpc },
  { title: "React", imgUrl: images.react },
  { title: "Redux", imgUrl: images.redux },
  { title: "JavaScript", imgUrl: images.javascript },
  { title: "HTML", imgUrl: images.html },
  { title: "CSS", imgUrl: images.css },
  { title: "Unity", imgUrl: images.unity },
  { title: "Git", imgUrl: images.git },
  { title: "Linux", imgUrl: images.linux },
];

const experiences = [
  {
    title: "Software Engineer",
    year: "2023",
    company: "Virtomat",
    description:
      "I developed the company website using React and migrated the PHP infrastructure.",
  },
  {
    title: "Software Engineer",
    year: "2022",
    company: "ENSO Artificial Intelligence",
    description:
      "I collaborated with EnsoAI in many different company areas, such as project management and machine learning.",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.title}
            >
              <div className="app__flex" style={{ backgroundColor: "#edf2f8" }}>
                <img src={skill.imgUrl} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          <motion.div className="app__skills-exp-works">
            {experiences.map((work) => (
              <>
                <motion.div className="app__skills-exp-item" key={work.year}>
                  <div className="app__skills-exp-year">
                    <p className="bold-text">{work.year}</p>
                  </div>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.title}
                  key={work.title}
                >
                  <h4 className="bold-text">{work.title}</h4>
                  <p className="p-text">{work.company}</p>
                </motion.div>
                <div className="skills-tooltip">{work.description}</div>
              </>
            ))}
          </motion.div>
          <a href={images.cv} target="_blank">
            View CV
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
