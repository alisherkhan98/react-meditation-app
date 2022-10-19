import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({

  palette: {
    primary: {
      main: "#ee9b97",
      contrastText: "#883f76",
    },
    secondary: {
      main: "#883f76",
      contrastText:"#fff"

    },
  },
});

theme = responsiveFontSizes(theme);
theme.typography.button.textTransform = "unset";
theme.typography.button.fontSize = "1rem";

export default theme;
