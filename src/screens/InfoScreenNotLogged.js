import React from "react";
import InfoScreen from "./InfoScreen";

// MUI
import { IconButton, useTheme } from "@mui/material";

// icons
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

// router
import { useNavigate } from "react-router-dom";

function InfoScreenNotLogged() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        sx={{
          width: "fit-content",
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
          color: theme.palette.secondary.main,
        }}
        onClick={() => navigate("/")}
      >
        <AiFillHome size="40px" />
      </IconButton>

      <InfoScreen />

      <IconButton
        sx={{
          width: "fit-content",
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform:"translateX(-50%)",
          zIndex: 10,
          color: theme.palette.secondary.main,
        }}
        onClick={() => navigate("/")}
      >
        <AiFillHome size="40px" />
      </IconButton>
    </>
  );
}

export default InfoScreenNotLogged;
