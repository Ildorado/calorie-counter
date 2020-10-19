import { FoodDataElement } from "../../types";

export type FocusedFoodDataElementTypes =
  | SetFocusedFoodDataElement
  | UnfocusFoodDataElement;

export const SET_FOCUSED_FOOD_DATA_ELEMENT =
  "focusedFoodData/SET_FOCUSED_FOOD_DATA_ELEMENT";

type SetFocusedFoodDataElement = {
  type: typeof SET_FOCUSED_FOOD_DATA_ELEMENT;
  payload: FoodDataElement["Food_Code"];
};

export const setFocusedFoodDataElement = (
  payload: FoodDataElement["Food_Code"]
) => {
  return { type: SET_FOCUSED_FOOD_DATA_ELEMENT, payload: payload };
};

export const UNFOCUS_FOOD_DATA_ELEMENT =
  "focusedFoodData/UNFOCUS_FOOD_DATA_ELEMENT";

type UnfocusFoodDataElement = {
  type: typeof UNFOCUS_FOOD_DATA_ELEMENT;
};

export const unfocusFoodDataElement = () => {
  return { type: SET_FOCUSED_FOOD_DATA_ELEMENT };
};
