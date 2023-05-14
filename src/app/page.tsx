"use client";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import NavMenu from "@/components/NavMenu";
import { useEffect, useState } from "react";
import { UserContext } from "../context/user/UserContext";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HomePage from "./home/HomePage";
import MyWorkPage from "./mywork/page";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [storedScrollPos, setStoredScrollPos] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setStoredScrollPos(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <UserContext.Provider
        value={{
          showModal,
          setShowModal,
          modalType,
          setModalType,
          scrollPosition,
          setScrollPosition,
          storedScrollPos,
          setStoredScrollPos,
        }}
      >
        <div className="content-container">
          {/* Home Section  */}
          <div id="home-section">
            <HomePage />
            <NavMenu />
          </div>
          {/* About Section */}
          <AboutPage />
          {/* Experience Section*/}

          {/* Projects Section*/}
          {showModal && <Modal scrollPosition={scrollPosition}></Modal>}
          <MyWorkPage />
          {/* Contact Me Section*/}
          <ContactPage />
        </div>
      </UserContext.Provider>
    </div>
  );
}
