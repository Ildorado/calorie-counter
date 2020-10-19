import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import DisplayDataElement from "./displayDataElement";
import DisplayDataList from "./diplayDataList";
import { getFocusedFoodDataElement } from "../../../redux/selectors";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      width: "100%",
      marginTop: "20px",
      overflow: "hidden",
    },
  })
);

const FoodDataSection = () => {
  const classes = useStyles();

  const focusedFoodDataElement = useSelector(getFocusedFoodDataElement);

  return (
    <div className={classes.container}>
      {focusedFoodDataElement ? <DisplayDataElement /> : <DisplayDataList />}
    </div>
  );
};

export default FoodDataSection;
