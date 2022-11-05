import React from "react";

// MUI
import { Dialog, DialogTitle, Button, DialogActions } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  closeSignOutModal,
  openLoading,
  closeSettingsDrawer,
} from "../features/modals/modalsSlice";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../app/firebaseConfig";

// Router
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  py: ".5rem",
  px: "1rem",
  borderRadius: "2rem",
};

function SignOutConfirm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signOutModalOpen } = useSelector((state) => state.modals);

  function handleSignOut() {
    dispatch(openLoading());
    dispatch(closeSignOutModal())
    dispatch(closeSettingsDrawer());
    navigate("/");
    signOut(auth);
  }
  return (
    <Dialog
      open={signOutModalOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={() => dispatch(closeSignOutModal())}
      sx={{ "& .MuiPaper-root": { borderRadius: 3, padding: "1rem" } }}
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to sign out?"}
      </DialogTitle>

      <DialogActions>
        <Button
          sx={{...buttonStyle, mr:2}}
          onClick={handleSignOut}
          color="secondary"
          variant="contained"
          
        >
          Sign Out
        </Button>
        <Button
          sx={buttonStyle}
          onClick={() => dispatch(closeSignOutModal())}
          color="secondary"
          variant="outlined"
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SignOutConfirm;
