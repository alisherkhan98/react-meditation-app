import { useTheme } from "@mui/material";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer({ duration, color, isPlaying, handleEnd }) {
  const theme = useTheme();
  const children = ({ remainingTime }) => {
    let minutes = Math.floor(remainingTime / 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = remainingTime % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return (
      <div className="timer">
        <div className="value" style={{ fontSize: 50, color: color }}>
          {minutes}:{seconds}
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="timer-wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CountdownCircleTimer
          isPlaying={isPlaying}
          strokeWidth={6}
          size={184}
          duration={duration}
          colors={color}
          onUpdate={(remainingTime) => {
            if (remainingTime === 0) {
              handleEnd();
            }
          }}
        >
          {children}
        </CountdownCircleTimer>
      </div>
    </>
  );
}
