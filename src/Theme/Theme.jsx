import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#71FCFC",
    },
    secondary: {
      main: "#5481ed",
    },
    third: {
      main: "#13353C",
    },
    fourth: {
      main: "#3165BB",
    },
    fifth: {
      main: "#ffffff",
    },
    sixth: {
      main: "#3165BB",
    },
    septh: {
      main: "#162E55",
    },
    octh: {
      main: "#A7A4A4",
    },
    nineth: {
      main: "#0AA3A3",
    },
    tenth: {
      main: "#162E55",
    },
    eleventh: {
      main: "#13353C",
    },

    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "Visby Round",  
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});

export default theme;
