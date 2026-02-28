export type AppointmentStatus =
  | "scheduled"
  | "completed"
  | "canceled"

export interface Appointment {
  id: string
  patientName: string
  date: string
  doctor: string
  specialty: string
  value: number
  status: AppointmentStatus
}

export const appointments: Appointment[] = [
  {
    id: "1",
    patientName: "Maria Oliveira",
    date: "2026-03-02T14:30:00",
    doctor: "Dr. Carlos Silva",
    specialty: "Cardiologia",
    value: 350,
    status: "scheduled",
  },
  {
    id: "2",
    patientName: "João Santos",
    date: "2026-03-01T09:00:00",
    doctor: "Dra. Ana Souza",
    specialty: "Dermatologia",
    value: 420.5,
    status: "completed",
  },
  {
    id: "3",
    patientName: "Fernanda Lima",
    date: "2026-03-03T16:15:00",
    doctor: "Dr. Pedro Alves",
    specialty: "Ortopedia",
    value: 500,
    status: "canceled",
  },
]