type LightMode = "light";
type DarkMode = "dark";
export type Mode = LightMode | DarkMode;
export type FoodData = any[];
export interface IState {
  mode: Mode;
  foodData: FoodData;
}