import { createContext, Dispatch } from "react";

import { initialState } from "./initialState";

export const Context = createContext({
  state: initialState,
  dispatch: (() => {}) as Dispatch<any>,
});
