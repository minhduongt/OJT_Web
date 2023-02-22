//fonts
import DelaGothicOneRegular from "../fonts/DelaGothicOne-Regular.ttf";
import SVNGilroyBold from "../fonts/SVNGilroy_Bold.woff";
import SVNGilroyLight from "../fonts/SVNGilroy_Light.woff";
//
import { createTheme } from "@mui/material";

const DelaGothicOne = {
  fontFamily: "Dela Gothic One",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
  url(${DelaGothicOneRegular}) format('truetype')`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8",
};

const SVNGilroy_Light = {
  fontFamily: "SVN-Gilroy",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local('SVN-Gilroy'),
    local('Raleway-Bold'),
    url(${SVNGilroyLight}) format('woff2')`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8",
};

const SVNGilroy_Bold = {
  fontFamily: "SVN-Gilroy",
  fontStyle: "normal",
  fontWeight: 600,
  src: `
    local('Raleway'),
    local('Raleway-Bold'),
    url(${SVNGilroyBold}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8",
};

const theme = createTheme({
  typography: {
    fontFamily: ["Dela Gothic One, SVN-Gilroy"].join(","),
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
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [DelaGothicOne, SVNGilroy_Light, SVNGilroy_Bold],
      },
    },
  },
});

export default theme;
