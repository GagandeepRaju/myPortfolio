import { createMuiTheme } from "@material-ui/core/styles";

const themeYellow = "#f7da1e";
// const arcBlue = "#000";
const themeBlack = "#000000";

const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      yellow: `${themeYellow}`,
      black: `${themeBlack}`,
    },
    primary: {
      main: `${themeYellow}`,
    },
    secondary: {
      main: `${themeBlack}`,
    },
    background: {
      default: `${themeYellow}`,
      paper: "#000",
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "3.5em",
      color: themeBlack,
      lineHeight: "1.5em",
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5em",
      color: themeBlack,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: themeYellow,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    learnButton: {
      borderColor: themeYellow,
      color: themeYellow,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiListItemText: {
      root: {
        fontSize: "2em",
      },
    },
  },
});
