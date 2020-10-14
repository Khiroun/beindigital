import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec407a",
      dark: "#b4004e",
      light: "#ff77a9",
    },
    secondary: {
      main: "#42a5f5",
      dark: "#0077c2",
      light: "#80d6ff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
