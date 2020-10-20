import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import { staticColors } from "../../constants/colors";
import { toggleLightMode } from "../../redux/actions";
import { getMode } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: `0 0 20px 0 ${staticColors.black}`,
    },
    h1: {
      color: staticColors.white,
    },

    lightModeButton: {
      color: staticColors.white,
    },
    lightModeButtonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const mode = useSelector(getMode);
  const dispatch = useDispatch();

  return (
    <header className={classes.container}>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <h1 className={classes.h1}>Food Calculator</h1>
        </Grid>
        <Grid item xs={2} className={classes.lightModeButtonContainer}>
          <IconButton
            className={classes.lightModeButton}
            aria-label="mode change"
            onClick={() => {
              dispatch(toggleLightMode());
            }}
          >
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Grid>
      </Grid>
    </header>
  );
};
export default Header;
