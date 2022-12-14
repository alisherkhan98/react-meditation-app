import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// firebase
import db, { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Router
import { Link, useNavigate } from "react-router-dom";

// icons
import { AiFillHome } from "react-icons/ai";

// MUI
import { IconButton, useTheme } from "@mui/material";

// redux
import {
  openLoading,
  openAlert,
  closeAlert,
} from "../redux/features/modalsSlice";
import { useDispatch } from "react-redux";

const buttonStyle = {
  padding: "1rem 2rem",
  width: 250,
  borderRadius: "2rem",
  mx: "auto",
  fontWeight: 700,
  color: "white",
};

const textFieldStyle = {
  borderRadius: "5px",
  backgroundColor: "#fff",
  width: 250,
};

function SignUpScreen() {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // function to capitalize name
  function capitalizeWords(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

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
    for (let input in credentials) {
      if (!credentials[input]) {
        dispatch(openAlert({message:"Please complete the form", severity:"error"}));
        setTimeout(() => {
          dispatch(closeAlert());
        }, 2000);
        return
      }
    }
    if (credentials.password === credentials.confirmPassword) {
      let isAborted = false
      
      // create new user in firebase
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          // adding new user info in a document
          console.log(userCredential);
          setDoc(doc(db, "users", userCredential.user.uid), {
            email: userCredential.user.email,
            name: capitalizeWords(credentials.name),
            favorites: [],
          });
        })
        .catch((error) => {
          isAborted = true
          dispatch(openAlert({message: error.code, severity:"error"}));
          setTimeout(() => {
            dispatch(closeAlert());
          }, 2000);
        })
        .then(() => {
          if (isAborted) return
          dispatch(openLoading());
          navigate("/");
        })
      } else {
        dispatch(openAlert({message:"Passwords don't match", severity:"error"}));
        setTimeout(() => {
          dispatch(closeAlert());
        }, 2000);;
    }
  }

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
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
        <Typography variant="h4">Create a new account.</Typography>
        {/* name */}
        <TextField
          required
          sx={textFieldStyle}
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
          required
          sx={textFieldStyle}
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
          required
          sx={textFieldStyle}
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
          required
          sx={textFieldStyle}
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
          type="submit"
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
