import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import DisplayDataElement from "./displayDataElement";
import DisplayDataList from "./diplayDataList";
import { getFocusedFoodData } from "../../../redux/selectors";
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

  const focusedFoodData = useSelector(getFocusedFoodData);

  return (
    <div className={classes.container}>
      {focusedFoodData ? (
        <DisplayDataElement id={focusedFoodData.id} />
      ) : (
        <DisplayDataList />
      )}
    </div>
  );
};

export default FoodDataSection;
