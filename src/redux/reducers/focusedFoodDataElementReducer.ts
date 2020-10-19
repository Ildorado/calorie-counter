import {
  SET_FOCUSED_FOOD_DATA_ELEMENT,
  UNFOCUS_FOOD_DATA_ELEMENT,
  FocusedFoodDataElementTypes,
} from "../actions";
import { FocusedFoodDataReducerState } from "../../types";
const initialState: FocusedFoodDataReducerState = null;
export default function (
  state = initialState,
  action: FocusedFoodDataElementTypes
) {
  switch (action.type) {
    case SET_FOCUSED_FOOD_DATA_ELEMENT:
      return { ...state, id: String(action.payload) };
    case UNFOCUS_FOOD_DATA_ELEMENT:
      return initialState;
    default:
      return state;
  }
}
