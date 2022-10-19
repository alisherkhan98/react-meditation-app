import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import Logo from "./Logo";
import SettingsIcon from "@mui/icons-material/Settings";
import MobileDrawer from "./MobileDrawer";
import { useDispatch } from "react-redux";
import { openMobileDrawer } from "../features/drawers/drawerSlice";

function MobileNav() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
              color: "secondary.main"
            }
         }}
          color={"secondary"}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            const oldValue = value;
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Meditate" icon={<Logo />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction
            onClick={() => dispatch(openMobileDrawer())}
            label="Settings"
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      </Paper>
      <MobileDrawer />
    </>
  );
}

export default MobileNav;
