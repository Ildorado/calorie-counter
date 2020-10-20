import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { FoodDataElement } from "../../../../types";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedFoodData } from "../../../../redux/selectors";
import { setFocusedFoodData } from "../../../../redux/actions";
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
    fixedSizeList: {
      display: "flex",
      flexGrow: 1,
    },
    listItem: {
      width: "100%",
    },
    listItemName: {
      fontSize: "1.5rem",
    },
    listItemProperties: {
      fontSize: "1.25rem",
    },
  })
);

const RenderRow = (props: ListChildComponentProps) => {
  const classes = useStyles();
  const { index, style, data } = props;
  const element: FoodDataElement = data.foodData[index];
  const onClickHandler: (id: number) => void = data.onClickHandler;

  return (
    <ListItem
      button
      style={style}
      key={index}
      classes={{ container: classes.listItem }}
    >
      <ListItemText
        classes={{
          primary: classes.listItemName,
          secondary: classes.listItemProperties,
        }}
        primary={`${element?.Display_Name}`}
        secondary={`${Number(
          element?.Calories
        ).toFixed()} calories | Serving Size: ${Number(
          element?.Portion_Amount
        )} ${element?.Portion_Display_Name}`}
        onClick={() => onClickHandler(element.Food_Code)}
      />
    </ListItem>
  );
};

const FoodDataSection = () => {
  const classes = useStyles();
  const searchedFoodData = useSelector(getSearchedFoodData);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const onClickHandler = (id: number) => {
    dispatch(setFocusedFoodData(id));
  };
  return (
    <>
      <h1 className={classes.h1}>Select a Food</h1>
      <Divider light className={classes.delimiter} />
      <div className={classes.listContainer}>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={isExtraSmall ? 140 : 80}
              itemCount={searchedFoodData.length}
              itemData={{
                foodData: searchedFoodData,
                onClickHandler,
              }}
              className={classes.fixedSizeList}
            >
              {RenderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </>
  );
};

export default FoodDataSection;
