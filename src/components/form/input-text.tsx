import { Input } from "@/components/ui/input";

import { useFormContext } from "./useForm";

type TextInputProps = {
  readonly name: string;
  readonly placeholder?: string;
};

export default function TextInput({ name, placeholder }: TextInputProps) {
  const { values, setValue } = useFormContext();

  return (
    <Input
      key={name}
      placeholder={placeholder}
      value={values[name] ?? ""}
      onChange={(e) => setValue(name, e.target.value)}
    />
  );
}
