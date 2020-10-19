import { TOGGLE_LIGHT_MODE, ModeTypes } from "../actions";
import { Mode, ModeReducerState } from "../../types";
const initialState: ModeReducerState = "light";
export default function (state = initialState, action: ModeTypes) {
  switch (action.type) {
    case TOGGLE_LIGHT_MODE:
      let newMode: Mode;
      if (state === "light") {
        newMode = "dark";
      } else {
        newMode = "light";
      }
      return newMode;
    default:
      return state;
  }
}
