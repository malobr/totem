export type optionType = {
    id: string;
    value: string;
    label: string;
    difficulty: number;
    icon?: string;
    image?: string;
};

export type pageType = {
  pageNumber: number
  title: string;
  srcImage: string;
  type: "radio" | "checkbox" | "input";
  nullableValue: string | null;
  options: optionType[];
};