import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useStore } from "../../hooks";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import { staticColors } from "../../constants/colors";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.secondary.main,
      boxShadow: `0 0 20px 0 ${staticColors.black}`,
    },
    h1: {
      color: staticColors.white,
    },

    nightModeButton: {
      position: "absolute",
      right: "20px",
      color: staticColors.white,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  const {
    state: { mode },
    dispatch,
  } = useStore();

  return (
    <header className={classes.container}>
      <h1 className={classes.h1}>Food Calculator</h1>
      <IconButton
        className={classes.nightModeButton}
        aria-label="mode change"
        onClick={() => {
          dispatch({ type: "TOGGLE_LIGHT_MODE" });
        }}
      >
        {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </header>
  );
};
export default Header;
