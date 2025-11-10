import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

const Header = () => {
  // List of titles, memoized to avoid recreating array on every render
  const texts = useMemo(
    () => ["Emmanual Patrick", "A Full Stack Enginner", "Web Developr"],
    []
  );

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  // Update currentTextIndex every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(intervalId); // clean up interval on unmount
  }, [texts.length]);

  // Update currentText whenever currentTextIndex changes
  useEffect(() => {
    setCurrentText(texts[currentTextIndex]);
  }, [currentTextIndex, texts]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-intro">
          <div className="intro-cmp app__flex">
            <p className="p-text">Welcome to my portflio web site</p>
            <div>
              <h1 className="head-text">
                Hi, I'm <span style={{ color: "#314bac" }}>{currentText}</span>
              </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="app__head-desc">
              Im a dynamic Full Stack Developer with a year of experiance in the tech
              industry. I enjoy crafting web applictions that offer smooth and
              engaging user experiences. Proficient in frontend frameworks like
              React and Next.js, as well as backend using Express.js and NestJs.
              I have a good understnding of web accessibility standards and
              history of delivering projects on time and within budget. 
              Always looking to learn more and contrbute to a collaborative team.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="overlay circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
