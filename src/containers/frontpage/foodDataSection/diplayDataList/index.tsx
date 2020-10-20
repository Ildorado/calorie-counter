import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { VariableSizeList, ListChildComponentProps } from "react-window";
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
    list: {
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
  const rowHeights = React.useMemo(
    () =>
      searchedFoodData.map((elem) => {
        if (isExtraSmall) {
          return 90 + (elem.Display_Name.length / 7) * 40;
        } else {
          return 80;
        }
      }),
    [isExtraSmall, searchedFoodData]
  );
  const getItemSize = React.useCallback((index) => rowHeights[index], [
    rowHeights,
  ]);
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
            <VariableSizeList
              height={height < 400 ? 400 : height}
              width={width}
              itemSize={getItemSize}
              itemCount={searchedFoodData.length}
              itemData={{
                foodData: searchedFoodData,
                onClickHandler,
              }}
              className={classes.list}
            >
              {RenderRow}
            </VariableSizeList>
          )}
        </AutoSizer>
      </div>
    </>
  );
};

export default FoodDataSection;
