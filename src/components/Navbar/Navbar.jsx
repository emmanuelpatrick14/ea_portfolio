import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
// import { HiMenuAlt4, HiX } from "react-icons/hi"; // Commented out since sidebar is disabled
// import { HiMenuAlt4 } from "react-icons/hi"; // Also commented out
// import { motion } from "framer-motion"; // Sidebar animation temporarily disabled
import "./Navbar.scss";

const Navbar = () => {
  // Sidebar toggle state (currently unused)
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {/* ===== Logo Section ===== */}
      <div className="app__navbar-logo">
        <a href="#home">
          <CgProfile className="logo_icon" size={40} />
          <p>EA</p>
        </a>
      </div>

      {/* ===== Main Navigation Links (Visible on larger screens) ===== */}
      <ul className="app__navbar-links">
        {["home", "about", "work", "contact", "skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`} onClick={() => setToggle(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* ===== Sidebar Menu (Commented Out for Now) ===== */}
      {/*
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <ul>
              {["home", "about", "work", "contact", "skills"].map((item) => (
                <li key={`${item}`}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      */}
    </nav>
  );
};

export default Navbar;
