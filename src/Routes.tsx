import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { EmployeesPage } from "./pages/Employees";
import { LoginPage } from "./pages/Login";
import { UsoInterno } from "./pages/UsoInterno";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/uso-interno" element={<UsoInterno />} />
      </Routes>
    </Router>
  )
}