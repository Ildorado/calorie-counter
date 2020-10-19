import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      color: theme.palette.text.primary,
    },
    delimiter: {
      height: 3,
      marginBottom: "20px",
    },

    listContainer: {
      flexGrow: 1,
    },
  })
);

const FoodDataSection = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.h1}>Your Food</h1>
    </>
  );
};

export default FoodDataSection;
