import React from "react";

// MUI
import { Box, TextField, Button, Stack, Typography } from "@mui/material";

// icons
import { ImMinus, ImPlus } from "react-icons/im";

const playerButtonStyle = {
  p: "1rem",
  borderRadius: "50%",
  minWidth: 0,
  mx: 1,
  flex: "0 0 auto",
};

function TimePicker({
  handlePlusBtn,
  handleMinusBtn,
  handleInputChange,
  pickedTime,
}) {
  return (
    <Box
      component="form"
      sx={{
        height: "184px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Button
          variant="contained"
          color="secondary"
          sx={playerButtonStyle}
          onClick={handleMinusBtn}
        >
          <ImMinus />
        </Button>

        <TextField
          color="secondary"
          variant="outlined"
          sx={{
            width: "80px",
            backgroundColor: "#fff",
            
            "& input": { textAlign: "center", fontSize:"2rem", },
          }}
          value={pickedTime}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={playerButtonStyle}
          onClick={handlePlusBtn}
        >
          <ImPlus />
        </Button>
      </Stack>
      <Typography
                  sx={{
                    color: "secondary.main",
                    fontWeight: 400,
                  }}
                  variant="body"
                >
                  Minutes
                </Typography>
    </Box>
  );
}

export default TimePicker;
