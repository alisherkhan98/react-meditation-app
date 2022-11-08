import React from "react";

// MUI
import { Box, CardContent, Container, Typography, Card } from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";

// My imports
import { programs } from "../data";
import Waves from "../components/GradientWaves";
import Cards from "../components/Cards";
import PlayerModal from "../components/PlayerModal";

function MeditateScreen() {
  const { user } = useSelector((state) => state.user);
  const { playerOpen } = useSelector((state) => state.modals);

  // selecting current program
  let { currentProgram } = useSelector((state) => state.programs);
  currentProgram = programs.find((program) => program.name === currentProgram);

  const dispatch = useDispatch();

  return (
    <>
      {/* Background svg */}

      {/* Main */}
      <Box sx={{ py: { xs: "15%", sm: "10%" }, px: 3, minHeight: "100vh", boxSizing:"border-box" }}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            sx={{ color: "secondary.main", fontWeight: 600 }}
            variant="h4"
            mb={5}
          >
            Hi, {user?.name}! Ready to relax?
          </Typography>

          <Card sx={{ marginBottom: "20px" }}>
            <CardContent sx={{ margin: "auto" }}>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                fontWeight={600}
              >
                Getting started
              </Typography>
              <Typography variant="body">
                Choose one of the following programs, set the timer and you're
                good to go
              </Typography>
            </CardContent>
          </Card>

          <Typography
            variant="subtitle1"
            color="secondary.main"
            fontWeight={600}
          >
            Programs
          </Typography>

          {/* List of program cards */}
          <Cards programs={programs} />
        </Container>
      </Box>
      {currentProgram && <PlayerModal currentProgram={currentProgram} />}
    </>
  );
}

export default MeditateScreen;
