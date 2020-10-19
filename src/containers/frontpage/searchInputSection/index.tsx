import React from "react";
import Search from "./Search";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
    },
    h2: {
      color: theme.palette.text.primary,
    },
  })
);

const SearchSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Search Food</h2>
      <Search />
    </div>
  );
};
export default SearchSection;
