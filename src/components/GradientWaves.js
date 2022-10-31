import React from "react";
import waves from "../assets/images/waves.png";
function Waves({ height }) {
  return (
    <img
      src={waves}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "-1",
        width: "100%",
        height: height,
      }}
      alt=""
    />
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   style={{
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     zIndex: "-1",
    //     width: "100%",
    //     height: height,
    //   }}
    //   viewBox="0 0 1440 600"
    //   preserveAspectRatio="none"
    // >
    //   <defs>
    //     <linearGradient id="gradient" x1="0%" x2="100%" y1="50%" y2="50%">
    //       <stop offset="1%" stopColor="#fdd58f"></stop>
    //       <stop offset="60%" stopColor="#ee9b97"></stop>
    //     </linearGradient>
    //   </defs>
    //   <path
    //     fill="url(#gradient)"
    //     fillOpacity="0.53"
    //     strokeWidth="0"
    //     d="M0 600V200c197.467 5.6 394.933 11.2 542-7s243.733-60.2 385-63c141.267-2.8 327.133 33.6 513 70v400z"
    //     className="transition-all duration-300 ease-in-out delay-150 path-0"
    //     transform="rotate(-180 720 300)"
    //   ></path>
    //   <defs>
    //     <linearGradient x1="0%" x2="100%" y1="50%" y2="50%">
    //       <stop offset="5%" stopColor="#ee9b97"></stop>
    //       <stop offset="95%" stopColor="#fdd58f"></stop>
    //     </linearGradient>
    //   </defs>
    //   <path
    //     fill="url(#gradient)"
    //     strokeWidth="0"
    //     d="M0 600V400c145.467-15.867 290.933-31.733 470-27 179.067 4.733 391.733 30.067 559 38s289.133-1.533 411-11v200z"
    //     className="transition-all duration-300 ease-in-out delay-150 path-1"
    //     transform="rotate(-180 720 300)"
    //   ></path>
    // </svg>
  );
}

export default Waves;
