import type { Appointment } from "@/types/Appointment";

export const appointments: Appointment[] = [
  {
    id: "1",
    name: "Maria Oliveira",
    date: "2026-03-02T14:30:00",
    doctor: "Dr. Carlos Silva",
    specialty: "Cardiologia",
    value: 350,
    status: "scheduled",
  },
  {
    id: "2",
    name: "João Santos",
    date: "2026-03-01T09:00:00",
    doctor: "Dra. Ana Souza",
    specialty: "Dermatologia",
    value: 420.5,
    status: "completed",
  },
  {
    id: "3",
    name: "Fernanda Lima",
    date: "2026-03-03T16:15:00",
    doctor: "Dr. Pedro Alves",
    specialty: "Ortopedia",
    value: 500,
    status: "canceled",
  },
];
