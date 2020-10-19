import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import FilledInput from "@material-ui/core/FilledInput";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import data from "../../../assets/Food_Display_Table.json";
import { useDispatch } from "react-redux";

import { setFoodData } from "../../../redux/actions";
const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const Search = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (inputValue.length !== 0) {
        dispatch(
          setFoodData(
            _.filter(data, (result) =>
              result.Display_Name.toLowerCase().includes(
                inputValue.toLowerCase()
              )
            )
          )
        );
      }
      event.preventDefault();
    },
    [dispatch, inputValue]
  );

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <FilledInput
        className={classes.input}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="e.g., apples or bread"
        inputProps={{ "aria-label": "search food data" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={handleSubmit}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  );
};

export default Search;
