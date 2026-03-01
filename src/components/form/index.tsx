import {
  useState,
  useMemo,
  useCallback,
  type ReactNode,
  type SubmitEvent,
} from "react";
import {
  FormContext,
  type ValuesType,
  type FormValuesType,
  type FormContextType,
} from "./useForm";

export interface FormComponentProps<T> {
  readonly id?: string;
  readonly inputs: ReactNode;
  readonly initialValues?: FormValuesType<T>;
  readonly onSubmit: (values: FormValuesType<T>) => void;
}

export default function Form<T>({
  id,
  inputs,
  initialValues = {},
  onSubmit,
}: FormComponentProps<T>) {
  const [values, setValues] = useState(initialValues);

  const setValue = useCallback(
    (name: string, value: ValuesType | FormValuesType<unknown>) => {
      setValues((prev) => ({ ...prev, [name]: value }) as FormValuesType<T>);
    },
    [],
  );

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  const contextValue = useMemo<FormContextType>(
    () => ({ values: values as FormValuesType<unknown>, setValue }),
    [values, setValue],
  );

  return (
    <FormContext.Provider value={contextValue}>
      {inputs}
      <form id={id} onSubmit={handleSubmit}></form>
    </FormContext.Provider>
  );
}
