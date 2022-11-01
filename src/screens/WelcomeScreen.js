import React from "react";
// MUI
import { Box, Typography, Button, Grid, ButtonBase } from "@mui/material";

// Redux
import { useDispatch } from "react-redux";
import { loginAsGuest } from "../features/auth/userSlice";

// My imports
import GradientBlob from "../components/GradientBlob";

// Router
import { Link, useNavigate } from "react-router-dom";

// Inline Styles
const buttonStyle = {
  padding: "1rem 2rem",
  width: { xs: "100%" },
  maxWidth: { sm: "250px" },
  borderRadius: "2rem",
  marginBottom: "1rem",
  fontWeight: 700,
  backgroundColor: "#883f76",
  color: "white",
};

const containerStyle = {
  position: "relative",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
};

// Component
function WelcomeScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Box sx={containerStyle}>
        {/* Background svg */}
        <GradientBlob />
        <Typography mt={5} mb={10} variant="h2">
          Take a break.
          <br /> Meditate
        </Typography>
        {/* Buttons */}
        <Grid container maxWidth={900} width={"80%"}>
          <Grid item xs={12} sm={6} p={"1rem"}>
            <Button
              sx={buttonStyle}
              color="secondary"
              variant="contained"
              onClick={() => {
                dispatch(loginAsGuest());
              }}
            >
              Try as Guest
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} p={"1rem"}>
            <Button
              sx={buttonStyle}
              onClick={() => navigate("/signin")}
              color="secondary"
              variant="contained"
            >
              Sign In
            </Button>
          </Grid>
        </Grid>

        <Typography variant="body1" my={2} maxWidth={"80%"}>
          Don't have an account yet? <Link to="/signup">Sign Up</Link> now
        </Typography>
      </Box>
    </>
  );
}

export default WelcomeScreen;
