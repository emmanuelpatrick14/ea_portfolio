

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images"; // overlay
import "./Header.scss";
import { AppWrap } from "../../wrapper";

const Header = () => {
  const texts = useMemo(
    () => ["Emmanuel Patrick", "A Full Stack Engineer", "Web Developer"],
    []
  );

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  useEffect(() => {
    setCurrentText(texts[currentTextIndex]);
  }, [currentTextIndex, texts]);

  return (
    <div className="app__header app__flex">
      {/* Info Section */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-intro">
          <div className="intro-cmp app__flex">
            <p className="p-text">Welcome to my portfolio website</p>
            <div>
              <h1 className="head-text">
                Hi, I'm <span style={{ color: "#314bac" }}>{currentText}</span>
              </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="app__head-desc">
              I'm a dynamic Full Stack Developer with two years of experience in
              the tech industry. I enjoy crafting web applications that offer smooth
              and engaging user experiences. Proficient in frontend frameworks like
              React and Next.js, as well as backend using Express.js and NestJs. I
              have a good understanding of web accessibility standards and a history
              of delivering projects on time and within budget. Always looking to
              learn more and contribute to a collaborative team.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* Full portrait profile image */}
        <img src="/prof.jpeg" alt="profile" className="profile-img" />

        {/* Aesthetic overlay circle */}
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay-circle"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
