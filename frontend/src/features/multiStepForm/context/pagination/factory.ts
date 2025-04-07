import { Dispatch } from "react";
import { Action } from "./actions";

/**
 * Function factory for the vision test context.
 * @param dispatch - Share dispatch function.
 */
export const factory = (dispatch: Dispatch<Action>) => {
    return {
        setStep: (payload: number) => {
            dispatch({ type: "SET_STEP", payload });
        },

        setEditStep: (payload: number) => {
            dispatch({ type: "SET_EDIT_STEP", payload });
        },
    };
};