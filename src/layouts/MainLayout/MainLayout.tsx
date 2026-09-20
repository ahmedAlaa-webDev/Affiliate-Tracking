import AdminSidebar from "@/components/layout/AdminSidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const { pathname } = useLocation();

  if (pathname === "/in" || pathname === "/in/") {
    return <Navigate to="/in/admin/dashboard" replace />;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <AdminSidebar />

      <main className="bg-light">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;