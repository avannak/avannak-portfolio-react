"use client";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import StyledButton from "../Button/StyledButton";

type PropTypes = {
  children?: ReactNode;
  id?: string;
  className?: string;
  onClick: () => void;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  middleId: string;
  middleClassName: string;
  text: string;
  imgSrc: StaticImageData | string;
  blurDataUrl: any;
};
const ProjectThumbnail = (props: PropTypes) => {
  return (
    <div className="project-column" onClick={props.onClick}>
      <div className="middle">
        <div id={props.middleId} className={props.middleClassName}>
          <p>{props.text}</p>
          <StyledButton className="clickToViewBtn" text="Click To View" />
        </div>
        <Image
          id="project-img"
          className="image project"
          src={props.imgSrc}
          alt="project-thumbnail"
          placeholder="blur"
          height={300}
          width={500}
          blurDataURL={props.blurDataUrl}
        />
      </div>
    </div>
  );
};

export default ProjectThumbnail;
