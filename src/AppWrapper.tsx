import React, { useReducer } from "react";
import App from "./App";
import { initialState } from "./stateManagement/initialState";
import { Context } from "./stateManagement/context";
import Reducer from "./stateManagement/reducer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { darkModeColors, lightModeColors } from "./constants/colors";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: { default: lightModeColors.backgroundDefault },
    secondary: {
      main: lightModeColors.secondary,
    },
    // text:{}
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
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <MuiThemeProvider theme={state.mode === "light" ? lightTheme : darkTheme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </MuiThemeProvider>
    </Context.Provider>
  );
};
export default AppWrapper;
