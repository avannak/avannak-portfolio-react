"use client";
import { UserContext } from "@/context/user/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import AnimatedCursor from "react-animated-cursor";
// import DayNightToggle from "react-day-and-night-toggle";

type Props = {};

const NavBar = (props: Props) => {
  const {
    navBarIsOn,
    setNavBarIsOn,
    storedScrollPos,
    isDarkMode,
    setIsDarkMode,
  } = useContext(UserContext);
  return (
    <>
      {/* <AnimatedCursor
        outerStyle={{
          zIndex: 999999,
          backgroundColor: "rgba(255, 255, 255, 0.624)",
        }}
        innerStyle={{
          zIndex: 999999,
          backgroundColor: "rgb(253, 103, 103)",
        }}
      /> */}
      <div className="nav-bar">
        <div className="nav-bar-container">
          {/* <DayNightToggle
          className="day-night-toggle"
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
          size={navStyles}
        ></DayNightToggle> */}
          <Link href="/" style={{ marginLeft: "auto" }}>
            <FontAwesomeIcon
              icon={faHouse}
              style={{ margin: "auto", alignItems: "center" }}
            ></FontAwesomeIcon>
            <span style={{ marginLeft: "5px" }}>Home</span>
          </Link>
          <Link href="/about" style={{ marginLeft: "auto" }}>
            About
          </Link>
          <Link href="/projects" style={{ marginLeft: "auto" }}>
            Projects
          </Link>
          <Link href="/contact" style={{ marginLeft: "auto" }}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
