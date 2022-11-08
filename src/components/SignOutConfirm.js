import React from "react";

// MUI
import { Dialog, DialogTitle, Button, DialogActions } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  closeSignOutModal,
  openLoading,
  closeLoading,
  closeSettingsDrawer,
  openAlert,
  closeAlert,
} from "../features/modals/modalsSlice";
import { logout } from "../features/auth/userSlice";

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

  const {user} = useSelector((state)=>state.user)
  const { signOutModalOpen } = useSelector((state) => state.modals);

  function handleSignOut() {
    dispatch(openLoading());
    dispatch(closeSignOutModal());
    dispatch(closeSettingsDrawer());
    navigate("/");

    signOut(auth)
      .catch((err) => {
        dispatch(
          openAlert({
            message: "Ther was an error signing out. Try again",
            severity: "error",
          })
        );
        setTimeout(() => {
          dispatch(closeAlert());
        }, 2000);
      })
      .then(() => {
        setTimeout(() => {
          dispatch(closeLoading());
        }, 1500);
      });
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
          sx={{ ...buttonStyle, mr: 1 }}
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
