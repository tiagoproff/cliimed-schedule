import { Input } from "@/components/ui/input";

import { useFormContext } from "./useForm";
import { formatCurrency, formatToNumberValue } from "@/utils";

type CurrenceInputProps = {
  readonly name: string;
  readonly placeholder?: string;
};

export default function CurrenceInput({
  name,
  placeholder,
}: CurrenceInputProps) {
  const { values, setValue } = useFormContext();

  const rawValue = Number(values[name] ?? 0);
  console.log(values[name]);

  const formattedValue = formatCurrency(rawValue);

  return (
    <Input
      key={name}
      placeholder={placeholder}
      value={formattedValue}
      onChange={(e) =>
        setValue(name, formatToNumberValue(e.target.value, 2).toString())
      }
    />
  );
}
