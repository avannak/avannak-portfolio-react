import React from "react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

type Props = {};

const Icon = styled(SocialIcon)`
  height: 3.5em !important;
  width: 3.5em !important;

  @media (max-width: 623px) {
    height: 3em !important;
    width: 3em !important;
  }
`;

const Header = (props: Props) => {
  return (
    <div className="header">
      <Icon
        className="social"
        url="https://github.com/avannak"
        fgColor="white"
        bgColor="transparent"
      ></Icon>
      <Icon
        className="social"
        url="https://www.linkedin.com/in/arthur-vannakittikun-b7024a190/"
        fgColor="white"
        bgColor="transparent"
      ></Icon>
      <Icon
        className="social"
        url="https://www.youtube.com/arthurvmusic"
        fgColor="white"
        bgColor="transparent"
      ></Icon>
      <Icon
        className="social"
        url="https://soundcloud.com/arthurvofficial"
        fgColor="white"
        bgColor="transparent"
      ></Icon>
      <Icon
        className="social"
        url="https://open.spotify.com/artist/4tUwnPevkVbKAvX8welQYT?si=T65-uDYdQBGFKZdoA260JQ"
        fgColor="white"
        bgColor="transparent"
      ></Icon>
      <Icon
        className="social"
        url="https://www.instagram.com/arthurvkk/"
        fgColor="white"
        bgColor="transparent"
      ></Icon>
      <Icon
        className="social"
        url="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=arthurvat7@gmail.com&body"
        fgColor="white"
        bgColor="transparent"
      ></Icon>
    </div>
  );
};

export default Header;
