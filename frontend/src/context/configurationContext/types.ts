export type ProjectType = {
  ref: string;
  title: string;
  description: string;
  theme: string;
  logoUrl: string;
  pattern: string;
};

export type TogglesType = {
  configurationMenu: boolean;
  keyboard: boolean;
};

export type ConfigurationState = {
  project: ProjectType | null;
  toggles: TogglesType;
  loading: boolean;
};
