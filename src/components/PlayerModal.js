import React from "react";

import {
  Modal,
  Typography,
  Button,
  Fade,
  Box,
  Backdrop,
  IconButton,
  useTheme,
  Slider,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closePlayer } from "../features/modals/modalsSlice";

// My imports
import { programs } from "../app/data";
import Timer from "./Timer";
import { Timeit } from "react-timeit";
import Waves from "./GradientWaves";

// Sound
import useSound from "use-sound";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import { ImVolumeMedium } from "react-icons/im";

// Modal Box styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "primary.light",
  p: 4,
  width: { xs: "100vw", sm: "80vw" },
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "center",
  minHeight: { xs: "100vh", sm: "fit-content" },
  maxWidth: { sm: "600px" },
  aspectRatio: "16/9",
  alignItems: "center",
  boxSizing: "border-box",
  borderRadius: { sm: 4 },
  m: 0,
  overflow: "hidden",
};

// Button styles
const buttonStyle = {
  mt: 1,
  py: "1rem",
  px: "2rem",
  borderRadius: "2rem",
};
const playerButtonStyle = {
  p: "1rem",
  borderRadius: "50%",
  minWidth: 0,
  mx: 1,
};

export default function PlayerModal() {
  const theme = useTheme();

  // redux
  const { playerOpen } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  // selecting current program
  let { currentProgram } = useSelector((state) => state.programs);
  currentProgram = programs.find((program) => program.name === currentProgram);

  // defining states
  const [pickedTime, setPickedTime] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isStarted, setIsStarted] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [volume, setVolume] = React.useState(100);
  const volumeRelative = volume / 100;

  console.log(currentProgram?.soundUrl);
  // Sound
  const [play, { stop, pause, sound }] = useSound(currentProgram?.soundUrl, {
    loop: false,
    volume: volumeRelative,
  });
  // function to save value of time picker
  function handleChange(value) {
    const timeArray = value.split(":");
    const seconds = +timeArray[0] * 60 + +timeArray[1];
    setPickedTime(seconds);
  }

  // function to change volume state
  const handleSliderChange = (event, newValue) => {
    setVolume(newValue);
  };

  // function to handle timer end, passed as prop

  // useEffect to reset everything if you reset or the player is closed
  React.useEffect(() => {
    setIsPlaying(false);
    setIsStarted(false);
  }, [playerOpen]);
  return (
    <Modal
      aria-labelledby="player"
      aria-describedby="player for desktop"
      open={playerOpen}
      onClose={() => {
        dispatch(closePlayer());
        stop();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{ overflow: "scroll" }}
    >
      <Fade in={playerOpen}>
        <Box sx={style}>
          <Waves />
          {/* button to close player */}
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 10,
              color: theme.palette.secondary.main,
            }}
            size="large"
            onClick={() => {
              dispatch(closePlayer());
              stop();
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          {/* if session has started show timer with player buttons, if not then show time picker */}
          {isStarted ? (
            <>
              <Timer
                duration={pickedTime}
                color={theme.palette.secondary.main}
                isPlaying={isPlaying}
                key={reset}
                handleEnd={() => {
                  sound.fade(volumeRelative, 0, 1000);
                  setIsPlaying(false);
                  setTimeout(() => {
                    stop();
                  }, 1000);
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  ml: { sm: 5 },
                  mt: { xs: 7, sm: 0 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* restart button */}
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={playerButtonStyle}
                    onClick={() => {
                      setIsPlaying(false);
                      setReset(!reset);
                      stop();
                    }}
                  >
                    <MdRefresh size="24px" />
                  </Button>

                  {/* play/pause button */}
                  {isPlaying ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ ...playerButtonStyle, p: "1.5rem" }}
                      onClick={() => {
                        setIsPlaying(false);
                        pause();
                        sound?.fade(volumeRelative, 0, 1000);
                      }}
                    >
                      <BsPauseFill size="30px" />
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ ...playerButtonStyle, p: "1.5rem" }}
                      onClick={() => {
                        setIsPlaying(true);
                        play();
                        sound?.fade(0, volumeRelative, 1000);
                      }}
                    >
                      <BsFillPlayFill size="30px" />
                    </Button>
                  )}
                  {/* stop button */}
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={playerButtonStyle}
                    onClick={() => {
                      setIsPlaying(false);
                      setIsStarted(!isStarted);
                      setReset(!reset);
                      stop();
                    }}
                  >
                    <BsStopFill size="24px" />
                  </Button>
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ width: "90%", alignItems: "center", mt: 2 }}
                >
                  <ImVolumeMedium
                    color={theme.palette.secondary.light}
                    size="24px"
                  />
                  <Slider
                    aria-label="Volume"
                    color="secondary"
                    value={volume}
                    onChange={handleSliderChange}
                  />
                </Stack>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{}}>
                <Timeit onChange={handleChange} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  ml: { sm: 5 },
                  mt: { xs: 7, sm: 0 },
                }}
              >
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontWeight: 400,
                  }}
                  variant="body"
                >
                  Select duration and press start
                </Typography>

                {/* start program button */}
                <Button
                  variant="contained"
                  color="secondary"
                  sx={buttonStyle}
                  onClick={() => {
                    if (pickedTime === 0) return;
                    setIsPlaying(true);
                    setIsStarted(!isStarted);
                    play();
                    sound?.fade(0, 1, 1000);
                  }}
                >
                  <Typography variant="body" sx={{ fontWeight: 700 }}>
                    Start Meditation
                  </Typography>
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
