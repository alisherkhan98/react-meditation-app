import React from "react";

// MUI
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Avatar,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { closeSettingsDrawer } from "../features/modals/modalsSlice";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InfoIcon from "@mui/icons-material/Info";
import { MdKeyboardArrowRight } from "react-icons/md";

// My imports
import Waves from "./GradientWaves";

function SettingsDrawer() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { settingsDrawerOpen } = useSelector((state) => state.modals);
  const { user } = useSelector((state) => state.user);

  const settings = [
    { name: "Profile" },
    { name: "Info" },
    { name: "Sign Out" },
  ];

  const list = () => (
    <Box sx={{}}>
      <Waves height="25vh" />
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
        onClick={() => dispatch(closeSettingsDrawer())}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <List
        sx={{
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
        }}
      >
        <Avatar
          sx={{
            width: 90,
            height: 90,
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
        <Typography
          sx={{
            width: "100%",
            textAlign: "left",
            color: "secondary.main",
            fontWeight: 600,
          }}
          variant="h5"
        >
          Settings
        </Typography>

        {settings.map((setting) => (
          <ListItem sx={{ px: 0 }} key={setting.name}>
            <ListItemButton
              disableRipple
              sx={{
                justifyContent: "space-between",
                backgroundColor: theme.palette.primary.light,
                padding: 3,
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                    color: theme.palette.secondary.main,
                  }}
                >
                  {setting.name === "Profile" ? (
                    <AccountBoxIcon size="large" />
                  ) : setting.name === "Info" ? (
                    <InfoIcon />
                  ) : (
                    <LogoutIcon />
                  )}
                </ListItemIcon>
                <Typography variant="h5" sx={{ paddingRight: "24px" }}>
                  {setting.name}
                </Typography>
              </Box>
              <MdKeyboardArrowRight size="24px" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer color="primary" anchor="right" open={settingsDrawerOpen}>
      {list()}
    </Drawer>
  );
}

export default SettingsDrawer;
