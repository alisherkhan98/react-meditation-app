import React from "react";

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "red",
      }}
    >
      Loading
    </div>
  );
}

export default Loading;
