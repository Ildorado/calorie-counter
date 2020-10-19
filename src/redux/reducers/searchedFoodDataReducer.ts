import { SET_FOOD_DATA, SearchedFoodDataTypes } from "../actions";
import { SearchFoodDataReducerState } from "../../types";
const initialState: SearchFoodDataReducerState = [];
export default function (state = initialState, action: SearchedFoodDataTypes) {
  switch (action.type) {
    case SET_FOOD_DATA:
      return action.payload;
    default:
      return state;
  }
}
