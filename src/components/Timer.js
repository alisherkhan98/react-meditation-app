import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";



export default function Timer({ duration, color, isPlaying }) {
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
        <div className="value" style={{ fontSize: 50, color:color }}>
          {minutes}:{seconds}
        </div>
      </div>
    );
  };
  return (
    <>
      <svg height="0" width="0">
        <defs>
          <linearGradient id="my-gradient" x1="1" y1="0" x2="0" y2="0">
            <stop offset="5%" stopColor={theme.palette.secondary.main} />
            <stop offset="95%" stopColor={theme.palette.third.main} />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="timer-wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CountdownCircleTimer
          isPlaying={isPlaying}
          strokeWidth={6}
          size={200}
          duration={duration}
          colors={color}
          children={children}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {children}
        </CountdownCircleTimer>
      </div>
    </>
  );
}
