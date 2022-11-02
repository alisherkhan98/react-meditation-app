import { Box } from "@mui/material";
import React from "react";
import blob from "../assets/images/blob.png";
function GradientBlob() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: "-10",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <img
        src={blob}
        style={{
          position: "absolute",
          minHeight: "600px",
          height: "120%",
          width: "auto",
          left: "50%",
          top: "55%",
          transform: "translate(-50%,-50%)",
        }}
        alt=""
      />
    </Box>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 1000 1000"
    //   style={{
    //     position: "absolute",
    //     zIndex: "-10",
    //     height: "100%",
    //     width: "auto",
    //     left: "50%",
    //     top: "50%",
    //     transform: "translate(-50%,-50%)",
    //   }}
    // >
    //   <defs>
    //     <linearGradient
    //       id="linearGradientId"
    //       gradientTransform="rotate(180 .5 .5)"
    //     >
    //       <stop offset="0%" stopColor="#fdd58f"></stop>
    //       <stop offset="100%" stopColor="#f1afab"></stop>
    //     </linearGradient>
    //     <clipPath id="shape">
    //       <path
    //         fill="currentColor"
    //         d="M892.5 623Q793 746 684 834.5T430.5 897Q286 871 223 747.5t-83.5-255Q119 361 218 271.5t232-167q133-77.5 273.5 6T928 347q64 153-35.5 276z"
    //       ></path>
    //     </clipPath>
    //   </defs>
    //   <g clipPath="url(#shape)">
    //     <path
    //       fill="url(#linearGradientId)"
    //       d="M892.5 623Q793 746 684 834.5T430.5 897Q286 871 223 747.5t-83.5-255Q119 361 218 271.5t232-167q133-77.5 273.5 6T928 347q64 153-35.5 276z"
    //     ></path>
    //   </g>
    // </svg>
  );
}

export default GradientBlob;
