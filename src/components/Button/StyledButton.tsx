import React from "react";

type Props = { text: string };

const StyledButton = (props: Props) => {
  return (
    <div className="download-resume-wrapper">
      <button className="pushable">
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">{props.text}</span>
      </button>
    </div>
  );
};

export default StyledButton;
