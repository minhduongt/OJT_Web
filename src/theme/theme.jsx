import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Dela Gothic One"].join(","),
  },
  breakpoints: {
    values: {
      xs: "50px",
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1920px",
      "2xl": "2560px",
    },
  },
});

export default theme;
