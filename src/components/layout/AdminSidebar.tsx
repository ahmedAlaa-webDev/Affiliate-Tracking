import { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  House,
  People,
  PersonCircle,
  BoxArrowRight,
  List,
  X,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-dark text-white w-100">
      <div className="container">

        {/* Mobile Toggle */}
        <div className="d-lg-none p-3">
          <button
            className="btn btn-dark border border-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Sidebar Content */}
        <div
          className={`${
            isOpen ? "d-flex" : "d-none"
          } d-lg-flex flex-column flex-lg-row align-items-center justify-content-between`}
        >

          {/* Logo */}
          <div className="p-3 p-lg-4 text-center text-lg-start">
            <h4 className="mb-0 fw-bold">
              Referral App
            </h4>

            <small className="text-secondary">
              Admin Panel
            </small>
          </div>

          {/* Main Navigation */}
          <Nav className="d-flex flex-column flex-lg-row p-2 p-lg-3 gap-1 gap-lg-2">

            <NavLink
              to="/in/admin/dashboard"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-decoration-none d-flex align-items-center gap-2 rounded px-3 py-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
            >
              <House size={18} />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/in/admin/users"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-decoration-none d-flex align-items-center gap-2 rounded px-3 py-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
            >
              <People size={18} />
              <span>Users</span>
            </NavLink>

            {/* <NavLink
              to="/in/admin/analytics"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-decoration-none d-flex align-items-center gap-2 rounded px-3 py-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
            >
              <BarChart size={18} />
              <span>Analytics</span>
            </NavLink> */}

          </Nav>

          {/* User Actions */}
          <div className="d-flex flex-column flex-md-row align-items-center p-2 p-lg-3 gap-1 gap-lg-2">

            <NavLink
              to="/in/user/profile"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-decoration-none d-flex align-items-center gap-2 rounded px-3 py-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
            >
              <PersonCircle size={18} />
              <span>Profile</span>
            </NavLink>

            <NavLink
              to="/login"
              className="text-danger text-decoration-none d-flex align-items-center gap-2 rounded px-3 py-2"
            >
              <BoxArrowRight size={18} />
              <span>Logout</span>
            </NavLink>

          </div>

        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;