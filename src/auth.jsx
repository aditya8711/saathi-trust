import Dashboard from "./pages/Dashboard";
import MembershipPayment from "./pages/MembershipPayment";
import Help from "./pages/Help";

const authRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/membership",
    element: <MembershipPayment />,
  },
  {
    path: "/request-help",
    element: <Help />,
  },
];

export default authRoutes;
