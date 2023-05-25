import { UserContext } from "@/context/user/UserContext";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-scroll";
import DayNightToggle from "react-day-and-night-toggle";

type Props = {};

const NavBar = (props: Props) => {
  const {
    navBarIsOn,
    setNavBarIsOn,
    storedScrollPos,
    isDarkMode,
    setIsDarkMode,
  } = useContext(UserContext);
  const outerWidth = window.outerWidth;
  const navStyles = outerWidth < 598 ? 16 : 32;
  return (
    <div className="nav-bar">
      {/* <a href="#home">Home</a>
      <a href="#news">About</a>
      <a href="#news">My Work</a>
      <a href="#contact">Contact</a> */}
      <div className="nav-bar-container">
        <DayNightToggle
          className="day-night-toggle"
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
          size={navStyles}
        ></DayNightToggle>
        <Link
          activeClass="active"
          to="home-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="mywork-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
