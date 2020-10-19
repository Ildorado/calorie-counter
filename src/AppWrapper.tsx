import React from "react";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { darkModeColors, lightModeColors } from "./constants/colors";
import { useSelector } from "react-redux";
import { getMode } from "./redux/selectors";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: { default: lightModeColors.backgroundDefault },
    secondary: {
      main: lightModeColors.secondary,
    },
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: { default: darkModeColors.backgroundDefault },
    secondary: {
      main: darkModeColors.secondary,
    },
  },
});

const AppWrapper = () => {
  const mode = useSelector(getMode);
  return (
    <MuiThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>
  );
};
export default AppWrapper;
