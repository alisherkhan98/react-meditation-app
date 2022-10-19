import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import "../css/WelcomeScreen.css";
import { useDispatch } from "react-redux";
import { loginAsGuest } from "../features/auth/userSlice";
import GradientBlob from "../components/GradientBlob";

const buttonStyle = {
  padding: "1rem 2rem",
  width: {xs:"100%"},
  maxWidth: {sm:"250px"},
  borderRadius: "2rem",
  marginBottom: "1rem",
  fontWeight: 700,
  backgroundColor: "#883f76",
  color: "white",
};

const containerStyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  // backgroundImage: `linear-gradient(#f1afab, #fdd58f)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
function WelcomeScreen() {
  const dispatch = useDispatch()

  return (
    <>
    <GradientBlob/>
      <Box sx={containerStyle}>
        <Typography mb={10} variant="h2">
          Take a break.
          <br /> Meditate
        </Typography>

        <Grid container maxWidth={900} width={"80%"} >
          <Grid item xs={12} sm={6} p={"1rem"}>
            <Button sx={buttonStyle} color="secondary" variant="contained" onClick={()=>dispatch(loginAsGuest())}>
              Try as Guest
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} p={"1rem"}>
            <Button sx={buttonStyle} color="secondary" variant="contained">
              Sign In
            </Button>
          </Grid>
        </Grid>
        <Typography  variant="h6" mt={2} maxWidth={"80%"}>
        Don't have an account yet?{" "}
          <span className="welcomeScreen__signUp">Sign Up now</span>
        </Typography>
     
      </Box>
      
    </>
  );
}

export default WelcomeScreen;
