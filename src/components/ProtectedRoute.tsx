import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

type ProtectedRouteProps = {
  allowedRole: "admin" | "user";
};

const ProtectedRoute = ({
  allowedRole,
}: ProtectedRouteProps) => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role !== allowedRole) {
    return <Navigate to="/in" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;