import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="header">
        <SocialIcon
          url="https://github.com/avannak"
          fgColor="white"
          bgColor="transparent"
        ></SocialIcon>
          <SocialIcon
          url="https://www.linkedin.com/in/arthur-vannakittikun-b7024a190/"
          fgColor="white"
          bgColor="transparent"
        ></SocialIcon>
          <SocialIcon
          url="https://www.youtube.com/arthurvmusic"
          fgColor="white"
          bgColor="transparent"
        ></SocialIcon>
          <SocialIcon
          url="https://soundcloud.com/arthurvofficial"
          fgColor="white"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://www.instagram.com/arthurvkk/"
          fgColor="white"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=arthurvat7@gmail.com&body"
          fgColor="white"
          bgColor="transparent"
        ></SocialIcon>
      </div>
    </header>
  );
};

export default Header;
