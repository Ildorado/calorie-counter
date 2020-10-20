import { FoodDataElement } from "../../types";

export type FocusedFoodDataTypes =
  | SetFocusedFoodData
  | UnfocusFoodData;

export const SET_FOCUSED_FOOD_DATA =
  "focusedFoodData/SET_FOCUSED_FOOD_DATA";

type SetFocusedFoodData = {
  type: typeof SET_FOCUSED_FOOD_DATA;
  payload: FoodDataElement["Food_Code"];
};

export const setFocusedFoodData = (
  payload: FoodDataElement["Food_Code"]
) => {
  return { type: SET_FOCUSED_FOOD_DATA, payload: payload };
};

export const UNFOCUS_FOOD_DATA =
  "focusedFoodData/UNFOCUS_FOOD_DATA";

type UnfocusFoodData = {
  type: typeof UNFOCUS_FOOD_DATA;
};

export const unfocusFoodData = () => {
  return { type: UNFOCUS_FOOD_DATA };
};
