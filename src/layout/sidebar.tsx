import { NavLink } from "react-router-dom";
import { CalendarDays } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card p-6">
      <h1 className="text-xl font-semibold mb-8">Clínica</h1>

      <nav className="space-y-2">
        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
              isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`
          }
        >
          <CalendarDays size={16} />
          Agendamentos
        </NavLink>
      </nav>
    </aside>
  );
}
