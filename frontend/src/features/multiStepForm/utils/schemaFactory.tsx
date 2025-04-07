import { t } from "i18next";
import { z } from "zod";

export const schemaFactory = (type: string) => {
  switch (type) {
    case "checkbox":
      return z.object({
        values: z
          .array(z.string())
          .refine((value) => value.some((item) => item), {
            message: t("required"),
          }),
      });
    case "radio":
      return z.object({
        values: z
          .array(z.string())
          .refine((value) => value.some((item) => item), {
            message: t("required"),
          }),
      });
    case "input":
      return z.object({
        values: z
          .array(z.string())
          .refine((value) => value.some((item) => item), {
            message: t("required"),
          }),
      });
    default:
      return z.object({
        values: z
          .array(z.string())
          .refine((value) => value.some((item) => item), {
            message: t("required"),
          }),
      });
  }
};
