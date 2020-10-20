import { State } from "../../types";
export const getMode = (state: State) => state.mode;
export const getSearchedFoodData = (state: State) => state.searchedFoodData;
export const getFocusedFoodData = (state: State) =>
  state.focusedFoodData;
