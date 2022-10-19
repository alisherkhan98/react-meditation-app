import React from "react";
import "./css/App.css";
import Waves from "./components/GradientWaves";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, styled } from "@mui/material/styles";
import MeditateScreen from "./screens/MeditateScreen";
import theme from "./app/theme";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen"

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <>
        <Nav />
          <Router>
            <Routes>
              <Route path="/" element={<MeditateScreen />} />
              <Route path="/favorites" element={<FavoriteScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />

            </Routes>
          </Router>
        </>
      ) : (
        <WelcomeScreen />
      )}
    </ThemeProvider>
  );
}

export default App;
