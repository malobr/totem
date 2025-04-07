import { createContext, ReactNode, useReducer, useRef } from "react";

import { factory } from "./factory";
import { reducer } from "./reducer";

export type StepFormState = {
  step: number;
  edit_step: number;
};

export type StepFormActions = {
  setStep: (step: number) => void;
  setEditStep: (edit_step: number) => void;
};

const initialState: StepFormState = {
  step: 0,
  edit_step: 0,
};

type StepFormContextProviderProps = {
  children: ReactNode;
};

export const StepFormContext = createContext<
  [StepFormState, StepFormActions] | null
>(null);

export function StepFormContextProvider({
  children,
}: StepFormContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(factory(dispatch));

  return (
    <StepFormContext.Provider value={[state, actions.current]}>
      {children}
    </StepFormContext.Provider>
  );
}
