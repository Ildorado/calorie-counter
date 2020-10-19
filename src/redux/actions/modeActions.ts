export const TOGGLE_LIGHT_MODE = "mode/TOGGLE_LIGHT_MODE";
export type ModeTypes = ToggleLightMode;

type ToggleLightMode = {
  type: typeof TOGGLE_LIGHT_MODE;
}

export const toggleLightMode = () => {
  return { type: TOGGLE_LIGHT_MODE };
};
