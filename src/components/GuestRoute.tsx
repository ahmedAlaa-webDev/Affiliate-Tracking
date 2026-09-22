import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

const GuestRoute = () => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    if (role === "admin") {
      return <Navigate to="/in/admin" replace />;
    }

    if (role === "user") {
      return <Navigate to="/in/user" replace />;
    }
  }

  return <Outlet />;
};

export default GuestRoute;