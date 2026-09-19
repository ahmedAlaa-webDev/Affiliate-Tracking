
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AdminSidebar />

      <main className=" bg-light">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

