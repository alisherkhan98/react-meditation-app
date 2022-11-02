import React, { useEffect } from "react";

// MUI
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/theme";

// Redux
import { login, logout } from "./features/auth/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { setInitialFavorites } from "./features/programs/programsSlice";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import db, { auth } from "./app/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

// My imports
import Nav from "./components/Nav";
import WelcomeScreen from "./screens/WelcomeScreen";
import MeditateScreen from "./screens/MeditateScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ScrollToTop from "./components/ScrollToTop";
import GradientBlob from "./components/GradientBlob";

function App() {
  // fetch data from state
  const { user } = useSelector((state) => state.user);
  const { favorites } = useSelector((state) => state.programs);
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useDispatch();

  // login and logout when auth is changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        console.log(newUser);
        // logging in with data in firestore
        getDoc(doc(db, "users", newUser.uid)).then((docSnap) => {
          dispatch(
            login({
              uid: newUser.uid,
              ...docSnap.data(),
            })
          );

          // set remembered favorites at start
          if (docSnap.data().favorites) {
            dispatch(setInitialFavorites(docSnap.data().favorites));
          }
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

  // update favorites in firestore when modified
  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          favorites: favorites,
        },
        { merge: true }
      );
    }
  }, [favorites]);

  return (
    <ThemeProvider theme={theme}>
      {/* Show Welcome screen only if not logged in */}
      {(user ? (
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
          <GradientBlob />

          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </Routes>
        </Router>
      ))}
    </ThemeProvider>
  );
}

export default App;
