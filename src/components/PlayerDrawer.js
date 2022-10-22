import React from "react";
import Box from "@mui/material/Box";
import {Drawer, useMediaQuery} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closePlayer } from "../features/modals/modalsSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InfoIcon from "@mui/icons-material/Info";

const drawerWidth = "400px";
function PlayerDrawer() {
  const matches = useMediaQuery('(min-width:600px)')

  const theme = useTheme();

  const dispatch = useDispatch();

  const { playerOpen } = useSelector((state) => state.modals);
  const { user } = useSelector((state) => state.user);

  const list = () => (
    <>
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
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            fontSize: 40,
            mb: 2,
            backgroundColor: theme.palette.secondary.light,
          }}
          alt="Ali"
          src="/static/images/avatar/2.jpg"
        />
        <Typography mb={6} variant="h5">
          tis is player
        </Typography>
        {["Profile", "Info", "Sign Out"].map((text) => (
          <ListItem key={text}>
            <ListItemButton
              disableRipple
              sx={{
                justifyContent: "center",
                backgroundColor: theme.palette.primary.light,
                padding: 3,
                m: 1,
                borderRadius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  color: theme.palette.secondary.main,
                }}
              >
                {text === "Profile" ? (
                  <AccountBoxIcon />
                ) : text === "Info" ? (
                  <InfoIcon />
                ) : (
                  <LogoutIcon />
                )}
              </ListItemIcon>
              <Typography variant="h4" sx={{ paddingRight: "24px" }}>
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </>
  );
  return (
    <Drawer
    
      sx={{
        width: "100vw",

        
        flexShrink: 0,
        "& .MuiDrawer-paper": {
        width: "100vw",
          boxSizing: "border-box",
          backgroundColor:"primary.main"
        },
      }}
      color="primary"
      anchor="right"
      open={!matches && playerOpen}
    >
      {list()}
    </Drawer>
  );
}

export default PlayerDrawer;
