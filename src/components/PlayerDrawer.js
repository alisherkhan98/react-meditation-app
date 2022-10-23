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

const drawerWidth = "400px";
function PlayerDrawer() {
  const matches = useMediaQuery("(min-width:600px)");

  const theme = useTheme();

  const dispatch = useDispatch();

  const [time, setTime] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);

  const { playerOpen } = useSelector((state) => state.modals);
  console.log(time);
  let { currentProgram } = useSelector((state) => state.programs);
  currentProgram = programs.find((program) => program.name === currentProgram);

  function handleChange(value) {
    const timeArray = value.split(":");
    const seconds = timeArray[0] * 60 + +timeArray[1];
    console.log(seconds);
    setTime(seconds);
  }
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
            pt: "10vh",
            px: 3,
            boxSizing: "border-box",
            m: 0,
          },
        ]}
      >
        <Waves height="50vh" />
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
          duration={time}
          color={theme.palette.secondary.main}
          isPlaying={isPlaying}
        />
        {!isPlaying && (
          <Box sx={{ mt: 5 }}>
            <Timeit onChange={handleChange} />
          </Box>
        )}
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          <Typography variant="h4">{isPlaying ? "Stop" : "Start"}</Typography>
        </Button>
      </Box>
    </Drawer>
  );
}

export default PlayerDrawer;
