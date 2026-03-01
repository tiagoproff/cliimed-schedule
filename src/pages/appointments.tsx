import { appointments as initialData } from "@/data/appointments";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { Appointment } from "@/types/Appointment";
import {
  formatDate,
  formatCurrency,
  statusLabel,
  statusVariant,
} from "@/utils";
import ListPage from "@/components/list-page";
import DataTableForm from "@/components/form";
import type { FormValuesType } from "@/components/form/useForm";
import TextInput from "@/components/form/input-text";
import DateInput from "@/components/form/input-date";
import CurrenceInput from "@/components/form/input-currence";
import { Badge } from "@/components/ui/badge";
import type { DataTableColumnType } from "@/components/data-table";

export default function Appointments() {
  const [data, setData] = useLocalStorage<Appointment[]>(
    "appointments",
    initialData,
  );

  const inputs = [
    <TextInput key="name" name="name" placeholder="Nome do paciente" />,
    <TextInput key="doctor" name="doctor" placeholder="Médico" />,
    <CurrenceInput key="value" name="value" placeholder="Valor" />,
    <DateInput key="date" name="date" placeholder="Data e hora" />,
  ];

  function handleCreate({
    name = "",
    doctor = "",
    value = "",
    date = "",
  }: FormValuesType<Appointment>) {
    const valueStr = String(value);

    const numericValue = Number(valueStr.replaceAll(/\D/g, "")) / 100;

    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      name: String(name),
      doctor: String(doctor),
      specialty: "Clínico Geral",
      value: numericValue,
      date: String(date),
      status: "scheduled",
    };

    setData([...data, newAppointment]);
  }

  const columns: DataTableColumnType[] = [
    { key: "name", label: "Nome" },
    {
      key: "date",
      label: "Data",
      format: (value) => formatDate(value as string),
    },
    { key: "doctor", label: "Médico" },
    { key: "specialty", label: "Especialidade" },
    {
      key: "value",
      label: "Valor",
      format: (value) => formatCurrency(value as number),
    },
    {
      key: "status",
      label: "Status",
      format: (value) => (
        <Badge variant={statusVariant(value as string)}>
          {statusLabel(String(value))}
        </Badge>
      ),
    },
  ];

  return (
    <div>
      <ListPage<Appointment>
        title="Agendamentos"
        columns={columns}
        data={data}
        formEdit={<DataTableForm inputs={inputs} onSubmit={handleCreate} />}
      />
    </div>
  );
}
