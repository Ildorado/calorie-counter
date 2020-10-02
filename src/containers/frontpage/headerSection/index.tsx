import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";
import FitnessCenterRoundedIcon from "@material-ui/icons/FitnessCenterRounded";
import AccessAlarmRoundedIcon from "@material-ui/icons/AccessAlarmRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    h1: {
      color: theme.palette.text.primary,
    },

    iconButton: {
      fontSize: "50px",
      marginLeft: "10px",
      marginRight: "10px",
    },
  })
);

const HeaderSection = () => {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <div>
        <AccessAlarmRoundedIcon className={classes.iconButton} />
        <CakeRoundedIcon className={classes.iconButton} />
        <FastfoodRoundedIcon className={classes.iconButton} />
        <FitnessCenterRoundedIcon className={classes.iconButton} />
      </div>
    </header>
  );
};
export default HeaderSection;
