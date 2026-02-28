import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  appointments as initialData,
  type Appointment,
} from "@/data/appointments";

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function statusVariant(status: string) {
  switch (status) {
    case "scheduled":
      return "default";
    case "completed":
      return "secondary";
    case "canceled":
      return "destructive";
    default:
      return "outline";
  }
}

function statusLabel(status: string) {
  switch (status) {
    case "scheduled":
      return "Agendado";
    case "completed":
      return "Concluído";
    case "canceled":
      return "Cancelado";
    default:
      return status;
  }
}

export default function Appointments() {
  const [data, setData] = useState<Appointment[]>(initialData);

  const [patientName, setPatientName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  function handleCreate() {
    if (!patientName || !doctor || !value || !date) return;

    const numericValue = Number(value.replace(/\D/g, "")) / 100;

    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      patientName,
      doctor,
      specialty: "Clínico Geral",
      value: numericValue,
      date,
      status: "scheduled",
    };

    setData((prev) => [...prev, newAppointment]);

    setPatientName("");
    setDoctor("");
    setValue("");
    setDate("");
  }

  function handleValueChange(input: string) {
    const numeric = input.replaceAll(/\D/g, "");
    const number = Number(numeric) / 100;

    setValue(
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(number),
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Agendamentos</h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Novo Agendamento</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Agendamento</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <Input
                placeholder="Nome do paciente"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />

              <Input
                placeholder="Médico"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              />

              <Input
                placeholder="Valor"
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
              />

              <Input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button onClick={handleCreate}>Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Médico</TableHead>
              <TableHead>Especialidade</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{formatDate(appointment.date)}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.specialty}</TableCell>
                <TableCell>{formatCurrency(appointment.value)}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant(appointment.status)}>
                    {statusLabel(appointment.status)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
