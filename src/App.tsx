import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Appointments from "./pages/appointments";
import AppLayout from "./layout/app-layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/appointments" />} />
          <Route path="/appointments" element={<Appointments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
