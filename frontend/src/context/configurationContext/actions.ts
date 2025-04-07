import { ProjectType } from "./types";

type ProjectAction = { type: "SET_PROJECT"; payload: ProjectType | null };
type LoadingProjectAction = { type: "SET_LOADING"; payload: boolean };
type ChangePatternAction = { type: "SET_PATTERN"; payload: string };
type ChangeHeroImageAction = { type: "SET_HERO_IMAGE"; payload: string };
type ChangeLogoImageAction = { type: "SET_LOGO_IMAGE"; payload: string };
type ChangeTitleAction = { type: "SET_TITLE"; payload: string };

export type Actions =
  | ProjectAction
  | LoadingProjectAction
  | ChangePatternAction
  | ChangeHeroImageAction
  | ChangeLogoImageAction
  | ChangeTitleAction;
