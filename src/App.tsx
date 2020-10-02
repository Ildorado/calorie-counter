import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchScreen from "./containers/frontpage";
import Header from "./containers/header";
import { Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.default,
      height: "100%",
      width: "100%",
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <SearchScreen />
    </div>
  );
};

export default App;
