import { useTheme } from "@mui/material/styles";
import "../css/MeditateScreen.css";
import { Box, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Waves from "../components/GradientWaves";
import { Card } from "@mui/material";
function MeditateScreen() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Waves />
      <Box
        sx={{ pt: { xs: "15%", sm: "10%" }, px: { xs: 3 }, minHeight: "100vh" }}
      >
        <Typography
          sx={{ color: "secondary.main", fontWeight: 600 }}
          variant="h4"
          mb={5}
        >
          Hi, {user.name}! Ready to relax?
        </Typography>

        <Card elevation={0} sx={{ borderRadius: 5 }}>
          <CardContent>
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
      </Box>
    </>
  );
}

export default MeditateScreen;
