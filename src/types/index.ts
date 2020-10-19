type LightMode = "light";
type DarkMode = "dark";
export type Mode = LightMode | DarkMode;

export type FoodDataElement = {
  Food_Code: number;
  Display_Name: string;
  Portion_Default: number;
  Portion_Amount: string;
  Portion_Display_Name: string;
  Factor?: string;
  Increment: string;
  Multiplier: string;
  Grains: string;
  Whole_Grains: string;
  Vegetables: string;
  Orange_Vegetables: string;
  Drkgreen_Vegetables: string;
  Starchy_vegetables: string;
  Other_Vegetables: string;
  Fruits: string;
  Milk: string;
  Meats: string;
  Soy: string;
  Drybeans_Peas: string;
  Oils: string;
  Solid_Fats: string;
  Added_Sugars: string;
  Alcohol: string;
  Calories: string;
  Saturated_Fats: string;
};
export type FoodData = FoodDataElement[];
export type State = {
  mode: ModeReducerState;
  searchedFoodData: SearchFoodDataReducerState;
  focusedFoodDataElement: FocusedFoodDataReducerState;
};
export type ModeReducerState = Mode;
export type SearchFoodDataReducerState = FoodData;
export type FocusedFoodDataReducerState = {
  id: string;
} | null;
