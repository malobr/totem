import { Actions } from "./actions"
import { ConfigurationState } from "./types"

export const ProjectReducer = (state: ConfigurationState, action: Actions) => {
    switch (action.type) {
        case "SET_PROJECT":
            return { ...state, project: action.payload }
        case "SET_LOADING":
            return { ...state, loading: action.payload }
         case "SET_TITLE":
            return { ...state, project: state.project ? { ...state.project, title: action.payload } : null }
        case "SET_PATTERN":
            return { ...state, project: state.project ? { ...state.project, pattern: action.payload } : null }
        case "SET_HERO_IMAGE":
            return { ...state, project: state.project ?  { ...state.project, heroImageUrl: action.payload } : null}
        case "SET_LOGO_IMAGE":
            return { ...state, project: state.project ? { ...state.project, logoUrl: action.payload } : null}
        default:
            return state; 
    }
}