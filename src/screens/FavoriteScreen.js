import React from "react";

// MUI
import { Box, Container, CardContent, Typography, Card } from "@mui/material";

// Redux
import { useSelector } from "react-redux";

// My imports
import { programs } from "../app/data";
import Waves from "../components/GradientWaves";
import Cards from "../components/Cards";
import PlayerDrawer from "../components/PlayerDrawer";

function FavoriteScreen() {
  const favoriteNames = useSelector((state) => state.programs.favorites);
  const favorites = programs.filter((program) =>
    favoriteNames.includes(program.name)
  );

  return (
    <>
      {/* Background svg */}
      <Waves />

      {/* Main */}
      <Box
        sx={{ py: { xs: "15%", sm: "10%" }, px:3, minHeight: "100vh" }}
      >
        <Container maxWidth="lg">

          {/* Heading */}
          <Typography
            sx={{ color: "secondary.main", fontWeight: 600 }}
            variant="h4"
            mb={5}
          >
            Favorites
          </Typography>

          {/* Render a message if there are no favorites, otherwise a list of cards */}
          {favorites.length ? (
            <Cards programs={favorites} />
          ) : (
            <Card sx={{ marginBottom: "20px" }}>
              <CardContent sx={{ margin: "auto" }}>
                <Typography
                  variant="subtitle1"
                  color="secondary.main"
                  fontWeight={600}
                ></Typography>
                <Typography variant="body">
                  You don't have any favorites yet. Go to the main page to find
                  some
                </Typography>
              </CardContent>
            </Card>
          )}
        </Container>
      </Box>

      <PlayerDrawer />
    </>
  );
}

export default FavoriteScreen;
