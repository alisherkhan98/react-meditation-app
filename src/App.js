import React, { useEffect } from "react";

// MUI
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/theme";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import db, { auth } from "./app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

// My imports
import Nav from "./components/Nav";
import WelcomeScreen from "./screens/WelcomeScreen";
import MeditateScreen from "./screens/MeditateScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ScrollToTop from "./components/ScrollToTop";
import { login, logout } from "./features/auth/userSlice";

// Component

function App() {
  // fetch user from state
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((docSnap) => {
          dispatch(
            login({
              uid: user.uid,
              ...docSnap.data(),
            })
          );
        });
      } else {
        dispatch(logout());
        console.log("logged out");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log(user);
  return (
    <ThemeProvider theme={theme}>
      {/* Show Welcome screen only if not logged in */}
      {user ? (
        <Router>
          <ScrollToTop />
          <Nav />
          <Routes>
            <Route path="/" element={<MeditateScreen />} />
            <Route path="/favorites" element={<FavoriteScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </Routes>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
