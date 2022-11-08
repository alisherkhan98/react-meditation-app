import React from "react";

// MUI
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  IconButton,
} from "@mui/material";

// Router
import { useNavigate, Link } from "react-router-dom";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../app/firebaseConfig";

// icons
import { AiFillHome } from "react-icons/ai";

// redux
import {
  openLoading,
  openAlert,
  closeAlert,
} from "../features/modals/modalsSlice";
import { useDispatch } from "react-redux";

const buttonStyle = {
  padding: "1rem 2rem",
  width: 250,
  borderRadius: "2rem",
  mx: "auto",
  fontWeight: 700,
  backgroundColor: "#883f76",
  color: "white",
};

const textFieldStyle = {
  borderRadius: "5px",
  backgroundColor: "#fff",
  width: 250,
};

function SignInScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  //   function to make components controlled
  function handleChange(e) {
    const target = e.target;
    setCredentials((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  }
  //   function to handle sign in
  const signIn = (e) => {
    e.preventDefault();
    
    let isAborted = false
    // firebase sign in
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .catch((error) => {
      isAborted = true;
      dispatch(openAlert({message: error.code, severity:"error"}));
      setTimeout(() => {
        dispatch(closeAlert());
      }, 2000);
    })
    .then((user) => {
      if(isAborted) return
      dispatch(openLoading());
      navigate("/");
    })
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          minHeight: "100vh",
          overflow: "hidden",
          gap: 3,
          py: 5,
          boxSizing: "border-box",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <IconButton
          sx={{
            width: "fit-content",
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 10,
            color: theme.palette.secondary.main,
          }}
          onClick={() => navigate("/")}
        >
          <AiFillHome size="40px" />
        </IconButton>

        <Typography variant="h3">Welcome!</Typography>
        <Typography variant="h4">Sign in to continue.</Typography>

        <TextField
          // html input attribute
          sx={textFieldStyle}
          name="email"
          type="email"
          color="secondary"
          placeholder="johndoe@email.com"
          label="Email"
          variant="filled"
          onChange={handleChange}
          value={credentials.email}
        />
        <TextField
          sx={textFieldStyle}
          name="password"
          type="password"
          color="secondary"
          placeholder="password"
          label="Password"
          variant="filled"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button
          sx={buttonStyle}
          variant="contained"
          color="secondary"
          onClick={signIn}
          type="submit"
        >
          Sign in
        </Button>
        <Typography variant="body1">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link> now
        </Typography>
      </Box>
    </>
  );
}

export default SignInScreen;
