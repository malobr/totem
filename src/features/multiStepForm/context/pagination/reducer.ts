import { Action } from "./actions";
import { StepFormState } from ".";

/**
 * Vision test context reducer.
 * @param state - Actual state.
 * @param action - Action to be dispatched.
 */
export const reducer = (state: StepFormState, action: Action): StepFormState => {
    switch (action.type) {
        case "SET_STEP":
            return { ...state, step: action.payload };
        case "SET_EDIT_STEP":
            return { ...state, edit_step: action.payload };
        default:
            return state;
    }
};