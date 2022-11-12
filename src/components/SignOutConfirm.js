import React from "react";

// MUI
import { Dialog, DialogTitle, Button, DialogActions } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  closeSignOutModal,
  openLoading,
  closeLoading,
  closeMoreDrawer,
  openAlert,
  closeAlert,
} from "../redux/features/modalsSlice";

// firebase
import { signOut, deleteUser } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

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

  const { isAnonymous } = useSelector((state) => state.user);
  const { signOutModalOpen } = useSelector((state) => state.modals);

  function handleSignOut() {
    dispatch(openLoading());
    dispatch(closeSignOutModal());
    dispatch(closeMoreDrawer());
    navigate("/");
    
    // delete anonymous users to avoid memory leak
    if (isAnonymous) {
      deleteUser(auth.currentUser).catch((err) => {
        console.log("error deleting user");
      });
    }

    signOut(auth)
      .catch((err) => {
        dispatch(
          openAlert({
            message: "There was an error signing out. Try again",
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
