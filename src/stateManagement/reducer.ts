import { TOGGLE_LIGHT_MODE, SET_FOOD_DATA } from "./actions";
import { Mode, FoodData, IState } from "../types";
export default function (
  state: IState,
  action: { type: string; payload?: { foodData: FoodData } }
) {
  switch (action.type) {
    case TOGGLE_LIGHT_MODE:
      let newMode: Mode;
      if (state.mode === "light") {
        newMode = "dark";
      } else {
        newMode = "light";
      }
      return {
        ...state,
        mode: newMode,
      };
    case SET_FOOD_DATA:
      return {
        ...state,
        foodData: action?.payload?.foodData ? action.payload?.foodData : [],
      };
    default:
      return state;
  }
}
