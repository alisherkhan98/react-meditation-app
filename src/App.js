import React, { useEffect } from "react";

// MUI
import { ThemeProvider } from "@mui/material/styles";
import { Alert, Fade, Box } from "@mui/material";
import theme from "./theme";

// Redux
import {
  login,
  logout,
  loginAsGuest,
  setIsAnonymous,
} from "./redux/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { setInitialFavorites } from "./redux/features/programsSlice";
import { closeLoading } from "./redux/features/modalsSlice";
// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import db, { auth } from "./firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

// My imports
import blob from "./assets/images/blob.svg";
import waves from "./assets/images/waves.png";
import Nav from "./components/Nav";
import WelcomeScreen from "./screens/WelcomeScreen";
import MeditateScreen from "./screens/MeditateScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import ContactMeScreen from "./screens/ContactMeScreen";
import InfoScreen from "./screens/InfoScreen";
import InfoScreenNotLogged from "./screens/InfoScreenNotLogged";

function App() {
  // fetch data from state
  const { user, isAnonymous } = useSelector((state) => state.user);
  const { favorites } = useSelector((state) => state.programs);
  const { isLoading, alertOpen, alertMessage, alertSeverity } = useSelector(
    (state) => state.modals
  );

  const dispatch = useDispatch();

  // login and logout when auth is changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        console.log(newUser);

        if (newUser.isAnonymous === true) {
          dispatch(setIsAnonymous(true));
          dispatch(loginAsGuest());
          setTimeout(() => {
            dispatch(closeLoading());
          }, 1500);
        } else {
          dispatch(setIsAnonymous(false));

          // logging in with data in firestore
          getDoc(doc(db, "users", newUser.uid))
            .then((docSnap) => {
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
              return docSnap;
            })
            .then(() => {
              setTimeout(() => {
                dispatch(closeLoading());
              }, 1500);
            })
            .catch((err) => {
              console.log(err);
              setTimeout(() => {
                dispatch(closeLoading());
              }, 1500);
            });
        }
      } else {
        dispatch(setIsAnonymous(false));

        dispatch(logout());
        setTimeout(() => {
          dispatch(closeLoading());
        }, 1500);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  // update favorites in firestore when modified
  useEffect(() => {
    if (user && !isAnonymous) {
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
      {/* loading screen */}
      <Loading open={isLoading} />
      {/* alert in case of error or success*/}
      <Fade in={alertOpen}>
        <Alert
          severity={alertSeverity}
          sx={{
            position: "fixed",
            top: "3rem",
            left: "50%",
            zIndex: "1400",
            transform: "translateX(-50%)",
          }}
        >
          {alertMessage}
        </Alert>
      </Fade>
      <Router>
        {
          // Show Welcome screen only if not logged in
          user ? (
            <Box
              sx={{
                backgroundImage: `url(${waves})`,
                backgroundSize: "100% auto",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >
              {" "}
              <ScrollToTop />
              <Nav />
              <Routes>
                <Route path="/" element={<MeditateScreen />} />
                <Route path="/favorites" element={<FavoriteScreen />} />
                <Route path="/contact-me" element={<ContactMeScreen />} />
                <Route path="/info" element={<InfoScreen />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Box>
          ) : (
            <Box
              sx={{
                backgroundImage: `url(${blob})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/info" element={<InfoScreenNotLogged />} />
                <Route path="/signin" element={<SignInScreen />} />
                <Route path="/signup" element={<SignUpScreen />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Box>
          )
        }
      </Router>
    </ThemeProvider>
  );
}

export default App;
