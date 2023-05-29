import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

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
  imgSrc: StaticImageData;
};
const ProjectThumbnail = (props: PropTypes) => {
  return (
    <div className="project-column" onClick={props.onClick}>
      <div className="middle">
        <div id={props.middleId} className={props.middleClassName}>
          <p>{props.text}</p>
          <span>Click To View 🔎</span>
        </div>
        <Image
          id="project-img"
          className="image project"
          src={props.imgSrc}
          alt="project-thumbnail"
        />
      </div>
    </div>
  );
};

export default ProjectThumbnail;
