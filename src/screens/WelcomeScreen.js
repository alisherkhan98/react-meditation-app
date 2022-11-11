import React from "react";
// MUI
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";

// Redux
import { useDispatch } from "react-redux";
import {
  openLoading,
  openAlert,
  closeAlert,
} from "../redux/features/modalsSlice";

// firebase
import { signInAnonymously } from "firebase/auth";
import { auth } from "../app/firebaseConfig";

// Router
import { Link, useNavigate } from "react-router-dom";

// icons
import { BiInfoCircle } from "react-icons/bi";

// my imports
import blob from "../assets/images/blob.png"
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
  // backgroundImage:`url(${blob})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  overflow: "hidden",
};

// Component
function WelcomeScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const handleGuestLogin = () => {
    let isAborted = false;

    signInAnonymously(auth)
      .catch((error) => {
        isAborted = true;
        dispatch(
          openAlert({
            message: "An error occured. Please try again.",
            severity: "error",
          })
        );
        setTimeout(() => {
          dispatch(closeAlert());
        }, 2000);
      })
      .then((user) => {
        if (isAborted) return;
        dispatch(openLoading());
        navigate("/");
      });
  };
  return (
    <>
      <Box sx={containerStyle}>
        <IconButton
          sx={{
            width: "fit-content",
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 10,
            color: theme.palette.secondary.main,
          }}
          onClick={() => navigate("/info")}
        >
          <BiInfoCircle size="40px" />
        </IconButton>
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
              onClick={handleGuestLogin}
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
