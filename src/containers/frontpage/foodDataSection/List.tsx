import React from "react";
import { useStore } from "../../../hooks";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      flexGrow: 1,
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
  })
);
const RenderRow = (props: ListChildComponentProps) => {
  const classes = useStyles();
  const { index, style, data } = props;
  const element = data[index];
  return (
    <ListItem button style={style} key={index} className={classes.listItem}>
      <ListItemText
        // className={classes.listItemName}
        classes={{
          primary: classes.listItemName,
          secondary: classes.listItemProperties,
        }}
        primary={`${data[index]?.Display_Name}`}
        secondary={`${Number(
          element?.Calories
        ).toFixed()} calories | Serving Size: ${Number(
          element?.Portion_Amount
        )} ${element?.Portion_Display_Name}`}
      />
    </ListItem>
  );
};

const List = () => {
  const classes = useStyles();
  const {
    state: { foodData },
  } = useStore();
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          height={height}
          width={width}
          itemSize={isExtraSmall ? 140 : 80}
          itemCount={foodData.length}
          itemData={foodData}
          className={classes.fixedSizeList}
        >
          {RenderRow}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
};

export default List;
