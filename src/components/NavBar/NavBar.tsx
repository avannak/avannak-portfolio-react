"use client";
import { useContext } from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ReactSwitch from "react-switch";
import { useIsMobile } from "@/utils/isMobileDevice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/GlobalRedux/types";
import { toggleParallax } from "@/app/GlobalRedux/Features/parallax/parallaxSlice";
// import DayNightToggle from "react-day-and-night-toggle";

type Props = {};

const NavBar = (props: Props) => {
  const isMobile = useIsMobile();
  const parallaxIsOn = useSelector(
    (state: RootState) => state.parallax?.parallaxIsOn
  );
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleParallax());
  };
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        {/* <DayNightToggle
          className="day-night-toggle"
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
          size={navStyles}
        ></DayNightToggle> */}
        {!isMobile && (
          <>
            <p style={{ color: "white", marginRight: 15, fontSize: "0.7em" }}>
              Parallax: {parallaxIsOn ? "On" : "Off"} <br /> (Turn off if page
              is slow)
            </p>
            <ReactSwitch
              onChange={handleToggle}
              checked={parallaxIsOn}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </>
        )}
        <Link href="/" style={{ marginLeft: "15px" }}>
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
  );
};

export default NavBar;
