import React from "react";

// MUI
import { Box, Container, CardContent, Typography, Card } from "@mui/material";

// Redux
import { useSelector } from "react-redux";

// My imports
import { programs } from "../app/data";
import Waves from "../components/GradientWaves";
import Cards from "../components/Cards";
import PlayerModal from "../components/PlayerModal";

function FavoriteScreen() {
  // filterimg favorites from programs data
  const favoriteNames = useSelector((state) => state.programs.favorites);
  const favorites = programs.filter((program) =>
  favoriteNames.includes(program.name)
  );

  const { playerOpen } = useSelector((state) => state.modals);
  
  // selecting current program
  let { currentProgram } = useSelector((state) => state.programs);
 currentProgram = programs.find((program) => program.name === currentProgram);

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

      {playerOpen && <PlayerModal currentProgram={currentProgram} />}

    </>
  );
}

export default FavoriteScreen;
