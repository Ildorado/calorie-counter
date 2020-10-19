import React from "react";
import SearchInputSection from "./searchInputSection";
import HeaderSection from "./headerSection";
import FoodSectionData from "./foodDataSection";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
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
      <SearchInputSection />
      <FoodSectionData />
    </div>
  );
};
export default FrontPage;
