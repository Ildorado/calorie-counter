import {
  SET_FOCUSED_FOOD_DATA,
  UNFOCUS_FOOD_DATA,
  FocusedFoodDataTypes,
} from "../actions";
import { FocusedFoodDataReducerState } from "../../types";
const initialState: FocusedFoodDataReducerState = null;
export default function (
  state = initialState,
  action: FocusedFoodDataTypes
) {
  switch (action.type) {
    case SET_FOCUSED_FOOD_DATA:
      return { ...state, id: String(action.payload) };
    case UNFOCUS_FOOD_DATA:
      return initialState;
    default:
      return state;
  }
}
