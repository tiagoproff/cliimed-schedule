import { createContext, useContext } from "react";

export type ValuesType = string | number | readonly string[] | undefined;

export type FormValuesType<T> = {
  [key: string]: (keyof T extends string ? T[keyof T] : never) | ValuesType;
};

export interface FormContextType {
  values: FormValuesType<unknown>;
  setValue: (name: string, value: string) => void;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined,
);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormComponent");
  return context;
};
