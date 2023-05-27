import { UserContext } from "@/context/user/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-scroll";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
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
  const outerWidth = window.outerWidth;
  const navStyles = outerWidth < 598 ? 16 : 32;
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        {/* <DayNightToggle
          className="day-night-toggle"
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
          size={navStyles}
        ></DayNightToggle> */}
        <Link
          activeClass="active"
          to="home-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          style={{ marginLeft: "auto" }}
        >
          <FontAwesomeIcon
            icon={faHouse}
            style={{ margin: "auto", alignItems: "center" }}
          ></FontAwesomeIcon>
          <span style={{ marginLeft: "5px" }}>Home</span>
        </Link>
        <Link
          activeClass="active"
          to="about-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          style={{ marginLeft: "auto" }}
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
          style={{ marginLeft: "auto" }}
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
          style={{ marginLeft: "auto" }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
