import React from "react";

// Icons
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

// MUI
import { CardContent, Typography, useTheme, Grid, Card } from "@mui/material";

// Redux 
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../features/programs/programsSlice";
import { openPlayer } from "../features/modals/modalsSlice";


function Cards({ programs }) {
  const dispatch = useDispatch();


  const theme = useTheme();

  const favoriteBtnStyle = {
    position: "absolute",
    top: "7%",
    right: "7%",
    backgroundColor: "white",
    lineHeight: 0,
    padding: 5,
    borderRadius: "50%",
    width: "10%",
    height: "auto",
    color: theme.palette.primary.main,
  };

  const { favorites } = useSelector((state) => state.programs);
  return (
    <Grid container width={"100%"}>
      {programs.map((program) => {
        return (
          <Grid
            item
            sx={{ padding: "10px" }}
            xs={6}
            sm={4}
            md={3}
            key={program.name}
          >
            <Card
              sx={[
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  aspectRatio: "1.2",
                  position: "relative",
                },
                {
                  "& .programIcon": {
                    width: "100%",
                    height: "auto",
                    color: program.color,
                  },
                },
                { "&:hover": { boxShadow: "0 0 20px rgba(0,0,0,0.2)" } },
              ]}
              onClick={() => dispatch(openPlayer())}
            >
              {favorites.includes(program.name) ? (
                <MdFavorite
                  style={favoriteBtnStyle}
                  onClick={(event) => {
                    dispatch(toggleFavorites(program.name));
                    event.stopPropagation();
                  }}
                />
              ) : (
                <MdOutlineFavoriteBorder
                  style={favoriteBtnStyle}
                  onClick={(event) => {
                    dispatch(toggleFavorites(program.name));
                    event.stopPropagation();
                  }}
                />
              )}

              <CardContent
                sx={{
                  padding: "24px",
                  textAlign: "center",
                  width: "30%",
                }}
              >
                {program.icon}
              </CardContent>
            </Card>
            <Typography
              variant="subtitle2"
              color="secondary.main"
              fontWeight={600}
              pt={1}
            >
              {program.name}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Cards;
