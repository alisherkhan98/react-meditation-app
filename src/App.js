import React from "react";

// MUI
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/theme";

// Redux
import { useSelector } from "react-redux";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// My imports
import Nav from "./components/Nav";
import WelcomeScreen from "./screens/WelcomeScreen";
import MeditateScreen from "./screens/MeditateScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Component

function App() {
  // fetch user from state
  const { user } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={theme}>
      {/* Show Welcome screen only if not logged in */}
      {user ? (
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<MeditateScreen />} />
            <Route path="/favorites" element={<FavoriteScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Router>
      ) : (
        <WelcomeScreen />
      )}
    </ThemeProvider>
  );
}

export default App;
