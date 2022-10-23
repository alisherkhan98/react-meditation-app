import React from "react";

// MUI
import {
  Drawer,
  useMediaQuery,
  IconButton,
  useTheme,
  Typography,
  Box,
  Button,
} from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { closePlayer } from "../features/modals/modalsSlice";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// My imports
import { programs } from "../app/data";
import Timer from "./Timer";
import { Timeit } from "react-timeit";
import Waves from "./GradientWaves";

function PlayerDrawer() {
  const matches = useMediaQuery("(min-width:600px)");

  const theme = useTheme();

  const dispatch = useDispatch();

  const { playerOpen } = useSelector((state) => state.modals);
  // selecting current program
  let { currentProgram } = useSelector((state) => state.programs);
  currentProgram = programs.find((program) => program.name === currentProgram);

  // defining states
  const [pickedTime, setPickedTime] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isStarted, setIsStarted] = React.useState(false);
  const [reset, setReset] = React.useState(false);

  function handleChange(value) {
    console.log(value);
    if (value == "00:00") {
      return;
    }
    const timeArray = value.split(":");
    const seconds = +timeArray[0] * 60 + +timeArray[1];
    setPickedTime(seconds);
  }
  React.useEffect(() => {
    setIsPlaying(false);
    setPickedTime(0)
  }, [currentProgram, reset]);

  return (
    <Drawer
      sx={{
        width: "100vw",

        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "100vw",
          boxSizing: "border-box",
        },
      }}
      color="primary"
      anchor="right"
      open={!matches && playerOpen}
    >
      <Box
        sx={[
          {
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center",
            mb: 2,
            pt: "15vh",
            px: 3,
            boxSizing: "border-box",
            m: 0,
          },
        ]}
      >
        <Waves height="100vh" />
        {/* button to close player */}
        <IconButton
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 10,
            color: theme.palette.secondary.main,
            width: 50,
            height: 50,
          }}
          size="large"
          onClick={() => dispatch(closePlayer())}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Timer
          duration={pickedTime}
          color={theme.palette.secondary.main}
          isPlaying={isPlaying}
          key={reset}
        />

        {!isStarted && (
          <Box sx={{ mt: 5 }}>
            <Timeit onChange={handleChange} />
          </Box>
        )}

        {isStarted ? (
          <>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: "5vh" }}
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
            >
              <Typography variant="h4">
                {isPlaying ? "Pause" : "Play"}
              </Typography>
            </Button>

            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: "5vh" }}
              onClick={() => {
                setIsPlaying(false);
                setIsStarted(!isStarted);
                setReset(!reset);
              }}
            >
              <Typography variant="h4">Reset</Typography>
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: "5vh" }}
            onClick={() => {
              setIsPlaying(true);
              setIsStarted(!isStarted);
            }}
          >
            <Typography variant="h4">Start Program</Typography>
          </Button>
        )}
      </Box>
    </Drawer>
  );
}

export default PlayerDrawer;
