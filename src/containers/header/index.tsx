import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import { staticColors } from "../../constants/colors";
import { toggleLightMode } from "../../redux/actions";
import { getMode } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: theme.palette.secondary.main,
      boxShadow: `0 0 20px 0 ${staticColors.black}`,
    },
    h1: {
      marginTop: "-40px",
      color: staticColors.white,
    },

    lightModeButton: {
      position: "relative",
      top: "10px",
      alignSelf: "flex-end",
      color: staticColors.white,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const mode = useSelector(getMode);
  const dispatch = useDispatch();

  return (
    <header className={classes.container}>
      <IconButton
        className={classes.lightModeButton}
        aria-label="mode change"
        onClick={() => {
          dispatch(toggleLightMode());
        }}
      >
        {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      <h1 className={classes.h1}>Food Calculator</h1>
    </header>
  );
};
export default Header;
