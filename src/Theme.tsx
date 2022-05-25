import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#7C83FD",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#96BAFF",
      },
      typography: {
        fontFamily: "'Nunito Sans', 'sans-serif'",
        textTransform: "none",
      },
    },
  });