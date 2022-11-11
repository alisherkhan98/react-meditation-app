import React from "react";

// MUI
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";

// my imports
import mentalHealth from "../assets/images/mental-health.png";
import physicalHealth from "../assets/images/physical-health.png";
import meditate from "../assets/images/meditate-illustration.png";

//  styles
const containerStyle = {
  width: "100vw",
  px: 3,
  minHeight: "120vh",
  boxSizing: "border-box",
  py: { xs: "5rem", sm: "6rem" },
};

function InfoScreen() {
  return (
    <Box sx={containerStyle}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          sx={{ color: "secondary.main", fontWeight: 600 }}
          variant="h4"
          mb={5}
        >
          About meditation
        </Typography>

        {/* mental health benefits */}
        <Grid container sx={{ mb: { md: 3 } }}>
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 2, m: { md: 2 } }}>
              <CardContent>
                <Typography
                  sx={{ color: "secondary.main", fontWeight: 600, pl: 2 }}
                  variant="h6"
                >
                  Mental health benefits
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="Increases awareness, clarity, compassion, and a sense of calm" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="Increases focus and reduces mind-wandering" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary=" Eases psychological symptoms of depression, anxiety, and pain related to stress" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={mentalHealth}
              alt=""
              style={{
                width: "100%",
                maxWidth: "500px",
              }}
            />
          </Grid>
        </Grid>

        {/* physical benefits */}
        <Grid container sx={{ flexDirection: { md: "row-reverse" }, mb: 3 }}>
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 2, m: { md: 2 } }}>
              <CardContent>
                <Typography
                  sx={{ color: "secondary.main", fontWeight: 600, pl: 2 }}
                  variant="h6"
                >
                  Physical benefits
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="The parasympathetic nervous system is stimulated, causing the body to stop releasing stress hormones" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="Lowers blood pressure, heart rate, and oxygen consumption, which results in higher energy levels and better immunity and sleep." />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="It can dampen the genes involved in the inflammatory response, which is linked to stroke, heart disease, cancer, diabetes, and other serious diseases" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="Promotes the genes associated with DNA stability" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={physicalHealth}
              alt=""
              style={{
                width: "40%",
                maxWidth: "300px",
                padding: "3rem",
              }}
            />
          </Grid>
        </Grid>

        {/* requirements */}
        <Grid container sx={{ mb: { md: 3 } }}>
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 2, m: { md: 2 }, mt: 3 }}>
              <CardContent>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontWeight: 600,
                    pl: 2,
                    mb: 2,
                  }}
                  variant="h6"
                >
                  Requirements
                </Typography>
                <Typography sx={{ pl: 2 }}>
                  Meditation doesn't require much. Just remember these things:
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="What matters most is consistency" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="The best time to meditate is whenever we can" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="We only need a few minutes to meditate" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "3rem" }}>
                      <MdKeyboardArrowRight />
                    </ListItemIcon>
                    <ListItemText primary="There’s no right or wrong way to meditate" />
                  </ListItem>
                </List>
                <Typography sx={{ pl: 2 }}>
                  So, just sit back or lie down however you feel comfortable and
                  start meditating.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={meditate}
              alt=""
              style={{
                width: "50%",
                maxWidth: "350px",
                padding: "3rem",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default InfoScreen;
