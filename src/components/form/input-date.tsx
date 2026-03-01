import { Input } from "@/components/ui/input";

import { useFormContext } from "./useForm";
import { getMaxDateTime, getMinDateTime } from "@/lib/utils";
import { dateIsOnRange } from "@/utils";

type DateInputProps = {
  readonly name: string;
  readonly placeholder?: string;
};

export default function DateInput({ name, placeholder }: DateInputProps) {
  const { values, setValue } = useFormContext();

  return (
    <Input
      key={name}
      placeholder={placeholder}
      value={values[name] ?? ""}
      onChange={(e) =>
        dateIsOnRange(e.target.value) && setValue(name, e.target.value)
      }
      type="datetime-local"
      min={getMinDateTime()}
      max={getMaxDateTime()}
      step={1800}
    />
  );
}
