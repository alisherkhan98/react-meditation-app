import "../css/MeditateScreen.css";
import {
  Box,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Waves from "../components/GradientWaves";
import { Card } from "@mui/material";
import { toggleFavorites } from "../features/favorites/favoritesSlice";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import React from "react";

import { programs } from "../app/data";

function MeditateScreen() {
  const { user } = useSelector((state) => state.user);
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <>
      <Waves />
      <Box
        sx={{ py: { xs: "15%", sm: "10%" }, px: { xs: 3 }, minHeight: "100vh" }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{ color: "secondary.main", fontWeight: 600 }}
            variant="h4"
            mb={5}
          >
            Hi, {user.name}! Ready to relax?
          </Typography>

          <Card sx={{ marginBottom: "20px" }}>
            <CardContent sx={{ margin: "auto" }}>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                fontWeight={600}
              >
                Getting started
              </Typography>
              <Typography variant="body">
                Choose one of the following programs, set the timer and you're
                good to go{" "}
              </Typography>
            </CardContent>
          </Card>
          <Typography
            variant="subtitle1"
            color="secondary.main"
            fontWeight={600}
          >
            Programs
          </Typography>
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
                  >
                    {favorites.includes(program.name) ? (
                      <MdFavorite
                        style={{
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
                        }}
                        onClick={() => dispatch(toggleFavorites(program.name))}
                      />
                    ) : (
                      <MdOutlineFavoriteBorder
                        style={{
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
                        }}
                        onClick={() => dispatch(toggleFavorites(program.name))}
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
        </Container>
      </Box>
    </>
  );
}

export default MeditateScreen;
