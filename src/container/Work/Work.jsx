import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import { images } from '../../constants';

const works = [
  { hasCode: true, title: 'Pixel Trigger', description: 'Pixel Trigger an indie game developed using Unity 3D and C# and it is available on android.', codeLink: 'https://github.com/tudormatei/pixel-trigger', imgUrl: images.pixelTrigger, tags: ['Game', 'All']},
  { hasCode: true, title: 'AI Chatbot', description: 'I developed a chatbot using tensorflow 2.0 and python 3.', codeLink: 'https://github.com/tudormatei/tensorflow-chatbot', imgUrl: images.chatbot, tags: ['AI', 'All']},
  { hasCode: true, title: 'Slot Sinners', description: 'Slot Sinners is a game developed using Unity 3D for the devhacks hackathon in 2020.', codeLink: 'https://github.com/tudormatei/slot-sinners', imgUrl: images.slotSinners, tags: ['Game', 'All']},
  { hasCode: true, title: 'Pixel Catcher', description: 'Pixel Catcher is a mobile game developed with Unity Game Engine that is available on Google Play.', codeLink: 'https://play.google.com/store/apps/details?id=com.TudorasterDevs.PixelCatcher', imgUrl: images.pixelCatcher, tags: ['Game', 'All']},
  { hasCode: true, title: 'JavaFX Todo list', description: 'Developed a to do list with javaFX and scenebuilder.', codeLink: 'https://github.com/tudormatei/javafx-todolist', imgUrl: images.javaFX, tags: ['Others', 'All']},
  { hasCode: true, title: 'Cats and dogs classifier', description: 'Developed a web application using flask for API calls and tensorflow for analysing the image.', codeLink: 'https://github.com/tudormatei/cats-vs-dog-classifier-backend', imgUrl: images.tfLogo, tags: ['AI', 'All']},
  { hasCode: false, title: 'Swift Doc', description: 'A document auto-completion web application developed with React and Spring Boot.', codeLink: '', imgUrl: images.swiftDoc, tags: ['Web App', 'All']},
  { hasCode: false, title: 'Traffic sign recognition', description: 'I developed a traffic sign recognition model for my IB Extended Essay project.', codeLink: '', imgUrl: images.trafficSign, tags: ['AI', 'All']},
]

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');;
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [filterWorks, setFilterWorks] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if(item === 'All') {
        setFilterWorks(works);
      }
      else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>
        My
        <span> Projects</span>
      </h2>

      <div className='app__work-filter'>
        {['AI', 'Game', 'Web App', 'Others', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {filterWorks.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                {work.hasCode ? 
                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
                : null
                }
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10}}>{work.description}</p>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'projects',
  'app__primarybg'
);