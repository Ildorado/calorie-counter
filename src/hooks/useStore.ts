import React from "react";
import { Context } from "../stateManagement/context";
export const useStore = () => React.useContext(Context);
