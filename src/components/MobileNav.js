import React from "react";

// MUI
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

// Icons
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GiLotus } from "react-icons/gi";
import { TfiMoreAlt } from "react-icons/tfi";

// Redux
import { useDispatch } from "react-redux";
import { openMoreDrawer } from "../redux/features/modalsSlice";

// Router
import { useNavigate } from "react-router-dom";

// My imports
import MoreDrawer from "./MoreDrawer";

function MobileNav() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // function to show "More as selected when needed"
  function selectMore () {
    setValue(2)
  }
  
  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1100 }}
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
                dispatch(openMoreDrawer());
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
          <BottomNavigationAction label="More" icon={<TfiMoreAlt size="24px"/>} />
        </BottomNavigation>
      </Paper>
      <MoreDrawer selectMore={selectMore}/>
    </>
  );
}

export default MobileNav;
