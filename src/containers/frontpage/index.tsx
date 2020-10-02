import React from "react";
import SearchSection from "./searchSection";
import HeaderSection from "./headerSection";
import FoodSectionData from "./foodDataSection";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      marginTop: "20px",
      marginLeft: "20px",
      marginRight: "20px",
    },
  })
);
const FrontPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <HeaderSection />
      <SearchSection />
      <FoodSectionData />
    </div>
  );
};
export default FrontPage;
