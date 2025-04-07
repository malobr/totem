import { createContext } from "react";
import { Actions } from "./actions";
import { ConfigurationState } from "./types";

export const initialState: ConfigurationState = {
  project: null,
  toggles: { configurationMenu: false, keyboard: false },
  loading: true,
};

export const ConfigurationContext = createContext<
  | {
      state: ConfigurationState;
      dispatch: React.Dispatch<Actions>;
    }
  | undefined
>(undefined);
