import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import GradientBlob from "../components/GradientBlob";

// Router
import { useNavigate, Link } from "react-router-dom";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../app/firebaseConfig";
const buttonStyle = {
  padding: "1rem 2rem",
  width: 250,
  borderRadius: "2rem",
  mx: "auto",
  fontWeight: 700,
  backgroundColor: "#883f76",
  color: "white",
};

function SignInScreen() {
  const navigate = useNavigate();
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
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((user) => {
        
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
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
        variant="outlined"
      >
        <GradientBlob />

        <Typography variant="h3">Welcome!</Typography>
        <Typography variant="h4">Create a new account.</Typography>

        <TextField
          // html input attribute
          sx={{ backgroundColor: "#fff" }}
          name="email"
          type="email"
          color="secondary"
          placeholder="johndoe@email.com"
          label="Email"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          sx={{ backgroundColor: "#fff" }}
          name="password"
          type="password"
          color="secondary"
          placeholder="password"
          label="Password"
          variant="filled"
          onChange={handleChange}
        />
        <Button
          sx={buttonStyle}
          variant="contained"
          color="secondary"
          onClick={signIn}
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
