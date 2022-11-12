import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({

  palette: {
    primary: {
      light: "#ffece1",
      main: "#f1afab",
      contrastText: "#883f76",
    },
    secondary: {
      main: "#883f76",
      contrastText:"#fff"

    },
    third:{
      main:"#fdd58f"
    }
  },
  components: {
    MuiCard: {
      styleOverrides:{
        root:{backgroundColor:"#ffece1", borderRadius: 15, }
      },
      defaultProps: {
        elevation:0
      },
    }
  }
});

theme = responsiveFontSizes(theme);
theme.typography.button.textTransform = "unset";
theme.typography.button.fontSize = "1rem";

export default theme;
