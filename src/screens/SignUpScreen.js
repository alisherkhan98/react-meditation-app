import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GradientBlob from "../components/GradientBlob";

// firebase
import db, { auth } from "../app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Router
import { Link, useNavigate } from "react-router-dom";

// redux
import { login } from "../features/auth/userSlice";
import { useDispatch } from "react-redux";

const buttonStyle = {
  padding: "1rem 2rem",
  width: 250,
  borderRadius: "2rem",
  mx: "auto",
  fontWeight: 700,
  color: "white",
};

function SignUpScreen() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   function to make components controlled
  function handleChange(e) {
    const target = e.target;
    setCredentials((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  }

  //   function to handle submit
  function handleSubmit(e) {
    e.preventDefault();

    if (credentials.password === credentials.confirmPassword) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          // adding new user info in a document
          setDoc(doc(db, "users", userCredential.user.uid), {
            email: userCredential.user.email,
            name: credentials.name,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("passwords dont match");
    }
  }

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
        <Typography variant="h4">Sign in to continue.</Typography>
        {/* name */}
        <TextField
          sx={{ backgroundColor: "#fff" }}
          name="name"
          type="text"
          color="secondary"
          placeholder="John Doe"
          label="Name"
          variant="filled"
          onChange={handleChange}
        />
        {/* email */}
        <TextField
          sx={{ backgroundColor: "#fff" }}
          name="email"
          type="email"
          color="secondary"
          placeholder="johndoe@email.com"
          label="Email"
          variant="filled"
          onChange={handleChange}
        />
        {/* password */}
        <TextField
          sx={{ backgroundColor: "#fff" }}
          name="password"
          type="password"
          color="secondary"
          placeholder="Password"
          label="Password"
          variant="filled"
          onChange={handleChange}
        />
        {/* confirm password */}
        <TextField
          sx={{ backgroundColor: "#fff" }}
          name="confirmPassword"
          type="password"
          color="secondary"
          placeholder="Confirm password"
          label="Confirm password"
          variant="filled"
          onChange={handleChange}
        />
        <Button
          sx={buttonStyle}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Sign up
        </Button>
        <Typography variant="body1">
          Already have an account? <Link to="/signin">Sign In</Link>
        </Typography>
      </Box>
    </>
  );
}

export default SignUpScreen;
