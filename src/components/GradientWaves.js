import React from "react";
import waves from "../assets/images/waves.png";
function Waves({ height }) {
  return (
    <img
      src={waves}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "-1",
        width: "100%",
        height: height,
      }}
      alt=""
    />
    
  );
}

export default Waves;
