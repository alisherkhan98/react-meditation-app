import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Paper from "@mui/material/Paper";
import SettingsIcon from "@mui/icons-material/Settings";
import MobileDrawer from "./MobileDrawer";
import { useDispatch } from "react-redux";
import { openMobileDrawer } from "../features/drawers/drawerSlice"
import {GiLotus} from "react-icons/gi"
import {MdOutlineFavoriteBorder} from "react-icons/md"


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
            "& .Mui-selected, .Mui-selected svg": {
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
          <BottomNavigationAction label="Meditate" icon={<GiLotus size="24px" />} />
          <BottomNavigationAction label="Favorites" icon={<MdOutlineFavoriteBorder size="24px"/>} />
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
