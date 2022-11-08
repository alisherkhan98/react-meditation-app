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

// Router
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  closeSettingsDrawer,
  openSignOutModal,
} from "../features/modals/modalsSlice";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import {BiLogOut, BiInfoCircle} from "react-icons/bi"
import {IoMailOutline} from "react-icons/io5"
import { MdKeyboardArrowRight } from "react-icons/md";

// My imports
import Waves from "./GradientWaves";
import SignOutConfirm from "./SignOutConfirm";


function SettingsDrawer() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { settingsDrawerOpen } = useSelector((state) => state.modals);
  const { user } = useSelector((state) => state.user);

  const settings = [
    {
      name: "Contact me",
      handleClick: () => {
        navigate("/contact-me");
        dispatch(closeSettingsDrawer());
      },
      icon: <IoMailOutline size="24px" style={{height:"100%"}}/>
    },
    {
      name: "Info",
      handleClick: () => {
        dispatch(closeSettingsDrawer());
      },
      icon: <BiInfoCircle size="24px" style={{height:"100%"}}/>
    },
    {
      name: "Sign Out",
      handleClick: () => {
        dispatch(openSignOutModal());
      },
      icon: <BiLogOut size="24px" style={{height:"100%"}}/>
    },
  ];

  const list = () => (
    <Box>
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
          alt={user.name}
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
          <ListItem sx={{ px: 0 , py:2}} key={setting.name}>
            <ListItemButton
              disableRipple
              sx={{
                justifyContent: "space-between",
                backgroundColor: theme.palette.primary.light,
                padding: 3,
                borderRadius: "10px",
                "&:hover" :{
                backgroundColor: theme.palette.primary.main,
                }
              }}
              onClick={() => {
                setting.handleClick();
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                    color: theme.palette.secondary.main,
                  }}
                >
                 {setting.icon}
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
      <SignOutConfirm />
    </Drawer>
  );
}

export default SettingsDrawer;
