import { darken, lighten } from "@material-ui/core/styles/colorManipulator";
import { createMuiTheme } from "@material-ui/core/styles";
import { searchColor } from "../Palette";

export const objPrimaryTheme = {
  palette: {
    canvasColor: "#f9f9f9",
    error: {
      contrastText: searchColor("common", "white"),
      dark: darken(searchColor("brand", "error"), 0.2),
      light: lighten(searchColor("brand", "error"), 0.2),
      main: searchColor("brand", "error"),
    },
    text: {
      dark: searchColor("deep-grey", 500),
      darkGrey: searchColor("darkGrey", 300),
      deep: searchColor("grey", 800),
      disabled: searchColor("grey", 200),
      hint: searchColor("blue-grey", 300),
      primary: searchColor("blue-grey", 500),
      secondary: searchColor("grey", 400),
    },
  },
  spacing: {
    unit: 8,
  },
};

export default createMuiTheme(objPrimaryTheme);
