"use client";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
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
