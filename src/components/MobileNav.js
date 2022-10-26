import React from "react";

// MUI
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GiLotus } from "react-icons/gi";

// Redux
import { useDispatch } from "react-redux";
import { openSettingsDrawer } from "../features/modals/modalsSlice";

// Router
import { useNavigate } from "react-router-dom";

// My imports
import SettingsDrawer from "./SettingsDrawer";

function MobileNav() {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            "& .Mui-selected, .Mui-selected svg": {
              color: "secondary.main",
            },
          }}
          color={"secondary"}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            switch (newValue) {
              case 0:
                navigate("/");
                setValue(newValue);
                break;
              case 1:
                setValue(newValue);
                navigate("/favorites");
                break;
              case 2:
                dispatch(openSettingsDrawer());
                break;
              default:
                break;
            }
          }}
        >
          <BottomNavigationAction
            label="Meditate"
            icon={<GiLotus size="24px" />}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<MdOutlineFavoriteBorder size="24px" />}
          />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
      <SettingsDrawer />
    </>
  );
}

export default MobileNav;
