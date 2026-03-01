export type AppointmentStatus = "scheduled" | "completed" | "canceled";

export interface Appointment {
  id: string;
  name: string;
  date: string;
  doctor: string;
  specialty: string;
  value: number;
  status: AppointmentStatus;
}
