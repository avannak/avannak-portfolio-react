import Image from "next/image";
import React from "react";
import magnifyGlass from "../../assets/images/magnify-glass.webp";

type Props = { text: string; magnifyIcon?: boolean; downloadResume?: boolean };

const StyledButton = (props: Props) => {
  return (
    <div className="download-resume-wrapper">
      {props.downloadResume && (
        <a href="/documents/arthurvresume.pdf" download>
          <button className="pushable">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {props.text}
                {props.magnifyIcon && (
                  <Image
                    src={magnifyGlass}
                    alt="folder"
                    height={20}
                    width={20}
                    style={{
                      marginLeft: 10,
                      objectFit: "contain",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                )}
              </div>
            </span>
          </button>
        </a>
      )}
      {!props.downloadResume && (
        <button className="pushable">
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {props.text}
              {props.magnifyIcon && (
                <Image
                  src={magnifyGlass}
                  alt="folder"
                  height={20}
                  width={20}
                  style={{
                    marginLeft: 10,
                    objectFit: "contain",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              )}
            </div>
          </span>
        </button>
      )}
    </div>
  );
};

export default StyledButton;
