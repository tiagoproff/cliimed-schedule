import { Input } from "@/components/ui/input";

import { useFormContext } from "./useForm";
import { formatCurrency } from "@/utils";

type CurrenceInputProps = {
  readonly name: string;
  readonly placeholder?: string;
};

export default function CurrenceInput({
  name,
  placeholder,
}: CurrenceInputProps) {
  const { values, setValue } = useFormContext();

  return (
    <Input
      key={name}
      placeholder={placeholder}
      value={values[name] ?? ""}
      onChange={(e) => setValue(name, formatCurrency(Number(e.target.value)))}
    />
  );
}
