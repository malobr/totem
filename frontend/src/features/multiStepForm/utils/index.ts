import { CheckedState } from "@radix-ui/react-checkbox";
import { ControllerRenderProps } from "react-hook-form";
import { optionType, pageType } from "../types/formTypes";

const haveNullable = ({
  option,
  formData,
  field,
  checked,
}: {
  option: optionType;
  formData: pageType;
  field: ControllerRenderProps<{
    values: string[];
}, "values">;
  checked: CheckedState;
}) => {
  if (option.value === formData.nullableValue) {
    field.onChange(checked ? [formData.nullableValue] : []);
  } else {
    const updatedValues = checked
      ? [...field.value, option.value].filter(
          (e) => e !== formData.nullableValue
        )
      : field.value?.filter((valuex: string) => valuex !== option.value);
    field.onChange(updatedValues);
  }
};

const notHaveNullable = ({
  option,
  field,
  checked,
}: {
  option: optionType;
  field: ControllerRenderProps<{
    values: string[];
}, "values">;
  checked: CheckedState;
}) => {
  return checked
    ? field.onChange([...field.value, option.value])
    : field.onChange(
        field.value?.filter((value: string) => value !== option.value)
      );
};


export {notHaveNullable, haveNullable}