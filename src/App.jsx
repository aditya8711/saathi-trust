import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MembershipPayment from "./pages/MembershipPayment";
import Help from "./pages/Help";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard"; // Add this
import Footer from "./components/Ffooter";

<Routes>
  {/* existing routes */}
  <Route path="/admin" element={<AdminDashboard />} />
</Routes>


export default function App() {
  const location = useLocation();

  // 🔒 Define the routes where navbar and footer should be hidden
  const authRoutes = ["/", "/register"];

  const hideLayout = authRoutes.includes(location.pathname);

  return (
    <>
      {/* ✅ Conditionally render Navbar */}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/membership" element={<MembershipPayment />} />
        <Route path="/request-help" element={<Help />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      {/* ✅ Conditionally render Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}
