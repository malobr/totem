import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormProvider, useForm } from "react-hook-form";
import { pageType } from "../types/formTypes";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import { useStepForm } from "../hooks/useStepForm";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { schemaFactory } from "../utils/schemaFactory";
import { haveNullable, notHaveNullable } from "../utils";
import { ChangeEvent, useRef, useState } from "react";
import KeyboardWrapper from "@/components/Keyboard";

export default function FormPage({ formData }: { formData: pageType }) {
  const [input, setInput] = useState<string>("");
  const keyboard = useRef<any | null>(null); // eslint-disable-line
  const { nextStep } = useStepForm();
  const { t } = useTranslation();
  const isEven = formData.options.length % 2 === 0;

  const schema = schemaFactory(formData.type);
  type FormType = z.infer<typeof schema>;

  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: { values: [] },
  });
  const { control, setValue } = form;

  const onHandleSubmit = (data: FormType) => {
    console.log(data);
    nextStep();
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const newInput = event.target.value; // Capturando o novo valor do input
    setInput(newInput); // Atualizando o estado local
    setValue("values", [newInput]); // Atualizando o valor no react-hook-form

    if (keyboard.current) {
      keyboard.current.setInput(newInput); // Passando o novo valor para o teclado (se necessário)
    }
  };

  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ duration: 0.3, type: "tween", ease: "anticipate" }}
      className="w-full max-w-[800px] lg:max-w-[1000px] rounded-xl text-primary h-full py-10 lg:py-0 overflow-hidden "
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onHandleSubmit)}
            id="multistepform"
            className="flex flex-col h-full items-center w-full "
          >
            <div className="flex flex-col gap-10 lg:gap-5 justify-start lg:justify-center items-center h-full ">
              {formData.srcImage && (
                <img
                  src={formData.srcImage}
                  className="h-auto max-h-[400px] lg:h-[200px] rounded"
                />
              )}

              <h1 className="text-4xl lg:text-3xl font-extrabold text-center px-5">
                {t(formData.title)}
              </h1>
              <div
                className={`w-full flex flex-wrap  gap-4 items-center justify-center py-5${
                  !isEven && " flex-col lg:flex-row"
                }`}
              >
                {formData.options.map((option) => {
                  if (formData.type === "checkbox")
                    return (
                      <FormField
                        key={option.id}
                        control={control}
                        name="values"
                        render={(field) => (
                          <FormItem
                            className={`bg-white/10 selection:bg-white backdrop-opacity-10  ${
                              isEven ? "w-1/3" : "w-[90%] max-w-[500px] flex-1"
                            } flex-col items-center transition-all border rounded-xl ${
                              field.field.value?.includes(option.value)
                                ? "border-white/40 -translate-1 shadow-xl bg-white/20"
                                : "border-white/10 shadow"
                            }`}
                          >
                            <FormLabel className="w-full h-full flex flex-col items-center gap-2 p-4 lg:p-2 text-2xl lg:text-xl font-bold">
                              <img className="w-13 lg:w-10" src={option.icon} />
                              {t(option.label)}
                              <FormControl>
                                <Checkbox
                                  className="bg-transparent opacity-0 absolute"
                                  checked={field.field.value?.includes(
                                    option.value
                                  )}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const checked =
                                      !field.field.value?.includes(
                                        option.value
                                      );
                                    setTimeout(() => {
                                      if (formData.nullableValue) {
                                        haveNullable({
                                          option,
                                          formData,
                                          field: field.field,
                                          checked,
                                        });
                                      } else {
                                        notHaveNullable({
                                          option,
                                          field: field.field,
                                          checked,
                                        });
                                      }
                                    }, 200); // < delay
                                  }}
                                />
                              </FormControl>
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    );

                  if (formData.type === "input")
                    return (
                      <FormField
                        control={form.control}
                        name="values"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            {option.label && (
                              <FormLabel>{option.label}</FormLabel>
                            )}
                            <FormControl>
                              <Input
                                id={option.id}
                                placeholder={""}
                                {...field}
                                className="w-full h-18 lg:h-12 bg-white/10 text-center font-bold lg:text-2xl text-3xl"
                                onChange={(e) => onChangeInput(e)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                })}
              </div>
            </div>
            <div className="w-full max-w-[600px] flex flex-col items-center justify-center mb-5 gap-5">
              <Button
                id="multistepform-button"
                type="submit"
                form="multistepform"
                className="w-full text-2xl font-bold text-background py-7 flex flex-col items-center bg-primary opacity-90 "
              >
                CONTINUAR
              </Button>
              {formData.type === "input" && (
                <KeyboardWrapper
                  keyboardRef={keyboard}
                  onChange={setInput}
                  setValue={setValue}
                  input={input}
                />
              )}
            </div>
          </form>
        </Form>
      </FormProvider>
    </motion.div>
  );
}
