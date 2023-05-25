import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <SocialIcon
        className="social"
        url="https://github.com/avannak"
        fgColor="white"
        bgColor="transparent"
        // style={{ height: "80px", width: "80px" }}
      ></SocialIcon>
      <SocialIcon
        className="social"
        url="https://www.linkedin.com/in/arthur-vannakittikun-b7024a190/"
        fgColor="white"
        bgColor="transparent"
        // style={{ height: "80px", width: "80px" }}
      ></SocialIcon>
      <SocialIcon
        className="social"
        url="https://www.youtube.com/arthurvmusic"
        fgColor="white"
        bgColor="transparent"
        // style={{ height: "80px", width: "80px" }}
      ></SocialIcon>
      <SocialIcon
        className="social"
        url="https://soundcloud.com/arthurvofficial"
        fgColor="white"
        bgColor="transparent"
        // style={{ height: "80px", width: "80px" }}
      ></SocialIcon>
      <SocialIcon
        className="social"
        url="https://open.spotify.com/artist/4tUwnPevkVbKAvX8welQYT?si=T65-uDYdQBGFKZdoA260JQ"
        fgColor="white"
        bgColor="transparent"
        // style={{ height: "80px", width: "80px" }}
      ></SocialIcon>
      <SocialIcon
        className="social"
        url="https://www.instagram.com/arthurvkk/"
        fgColor="white"
        bgColor="transparent"
        // style={{ height: "80px", width: "80px" }}
      ></SocialIcon>
      <SocialIcon
        className="social"
        url="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=arthurvat7@gmail.com&body"
        fgColor="white"
        bgColor="transparent"
        // style={{ height: "80px", width: "80px" }}
      ></SocialIcon>
    </div>
  );
};

export default Header;
