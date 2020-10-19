import { FoodData } from "../../types";
export type SearchedFoodDataTypes = SetFoodData;

export const SET_FOOD_DATA = "searchedFoodData/SET_FOOD_DATA";
type SetFoodData = {
  type: typeof SET_FOOD_DATA;
  payload: FoodData;
};
export const setFoodData = (payload: FoodData) => {
  return { type: SET_FOOD_DATA, payload: payload };
};
