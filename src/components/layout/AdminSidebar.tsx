
import { Nav } from "react-bootstrap";
import {
  House,
  People,
  BarChart,
  PersonCircle,
  BoxArrowRight,
} from "react-bootstrap-icons";

function AdminSidebar() {
  return (
    <aside className="bg-dark text-white w-100">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">

          {/* Logo */}
          <div className="p-3 p-lg-4 text-center text-lg-start">
            <h4 className="mb-0 fw-bold">Referral App</h4>
            <small className="text-secondary">
              Admin Panel
            </small>
          </div>

          {/* Main Navigation */}
          <Nav className="d-flex flex-column flex-md-row p-2 p-lg-3 gap-1 gap-lg-2">
            <Nav.Link
              href="/in/admin"
              className="text-white d-flex align-items-center gap-2 rounded px-3 py-2"
            >
              <House size={18} />
              <span>Dashboard</span>
            </Nav.Link>

            <Nav.Link
              href="/in/admin/users"
              className="text-white d-flex align-items-center gap-2 rounded px-3 py-2"
            >
              <People size={18} />
              <span>Users</span>
            </Nav.Link>

            <Nav.Link
              href="/in/admin/analytics"
              className="text-white d-flex align-items-center gap-2 rounded px-3 py-2"
            >
              <BarChart size={18} />
              <span>Analytics</span>
            </Nav.Link>
          </Nav>

          {/* User Actions */}
          <div className="d-flex flex-column flex-md-row align-items-center p-2 p-lg-3 gap-1 gap-lg-2">
            <Nav.Link
              href="/in/user/profile"
              className="text-white d-flex align-items-center gap-2 rounded px-3 py-2"
            >
              <PersonCircle size={18} />
              <span>Profile</span>
            </Nav.Link>

            <Nav.Link
              href="/login"
              className="text-danger d-flex align-items-center gap-2 rounded px-3 py-2"
            >
              <BoxArrowRight size={18} />
              <span>Logout</span>
            </Nav.Link>
          </div>

        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;

