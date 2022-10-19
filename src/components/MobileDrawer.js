import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closeMobileDrawer } from "../features/drawers/drawerSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InfoIcon from "@mui/icons-material/Info";

function MobileDrawer() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { mobileDrawerOpen } = useSelector((state) => state.drawers);
  const { user } = useSelector((state) => state.user);

  const list = () => (
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
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
        onClick={() => dispatch(closeMobileDrawer())}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <List
        sx={{
          width: "100vw",
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
          Hi, {user.name}
        </Typography>
        {["Profile", "Info", "Sign Out"].map((text) => (
          <ListItem key={text}>
            <ListItemButton
              disableRipple
              sx={{
                justifyContent: "center",
                backgroundColor: theme.palette.primary.light,
                padding: 3,
                m:1,
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
    </Box>
  );
  return (
    <Drawer color="primary" anchor="right" open={mobileDrawerOpen}>
      {list()}
    </Drawer>
  );
}

export default MobileDrawer;
