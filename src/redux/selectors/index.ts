import { State } from "../../types";
export const getMode = (state: State) => state.mode;
export const getSearchedFoodData = (state: State) => state.searchedFoodData;
export const getFocusedFoodDataElement = (state: State) =>
  state.focusedFoodDataElement;
