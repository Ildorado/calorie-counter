import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "./List";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      width: "100%",
      marginTop: "20px",
      overflow: "hidden",
    },
    h1: {
      color: theme.palette.text.primary,
    },
    delimiter: {
      height: 3,
      marginBottom: "20px",
    },
    fixedSizeList: {
      display: "flex",
      flexGrow: 1,
    },
    listItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
      justifyContent: "center",
    },
    listItemName: {
      fontSize: "1.5rem",
    },
    listItemProperties: {
      fontSize: "1.25rem",
    },
    listContainer: {
      flexGrow: 1,
    },
  })
);

const FoodDataSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Select a Food</h1>
      <Divider light className={classes.delimiter} />
      <div className={classes.listContainer}>
        <List />
      </div>
    </div>
  );
};

export default FoodDataSection;
