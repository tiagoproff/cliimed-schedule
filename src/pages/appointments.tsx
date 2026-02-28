import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../components/ui/table";

import { Badge } from "../components/ui/badge";
import { appointments } from "../data/appointments";

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
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Agendamentos</h2>

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
            {appointments.map((appointment) => (
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
