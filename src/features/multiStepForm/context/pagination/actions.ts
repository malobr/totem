type StepAction = { type: "SET_STEP"; payload: number };
type EditStepAction = { type: "SET_EDIT_STEP"; payload: number };

export type Action =
    | StepAction
    | EditStepAction;