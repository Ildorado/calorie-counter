import modeReducer from "./modeReducer";
import searchedFoodDataReducer from "./searchedFoodDataReducer";
import focusedFoodDataReducer from "./focusedFoodDataElementReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  mode: modeReducer,
  searchedFoodData: searchedFoodDataReducer,
  focusedFoodData: focusedFoodDataReducer,
});
export default rootReducer;
