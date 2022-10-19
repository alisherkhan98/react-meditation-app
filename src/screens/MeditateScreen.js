import { useTheme } from "@mui/material/styles";
import "../css/MeditateScreen.css";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Waves from "../components/WavesBG";
function MeditateScreen() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Waves />
      <Box
        sx={{ pt: { xs: "15%", md: "10%" }, px: { xs: 3 }, minHeight: "100vh" }}
      >
        <Typography
          sx={{ color: "secondary.main", fontWeight: 600 }}
          variant="h4"
        >
          Hi, {user.name}! Ready to relax?
        </Typography>
      </Box>
    </>
  );
}

export default MeditateScreen;
