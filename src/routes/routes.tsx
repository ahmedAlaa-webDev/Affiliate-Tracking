import { createBrowserRouter, Navigate } from "react-router-dom";

import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import UserDetailsPage from "@/pages/admin/UserDetailsPage";
import UsersPage from "@/pages/admin/UsersPage";
import LoginPag from "@/pages/auth/LoginPage";
import UserDashboardPage from "@/pages/user/UserDashboardPage";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import ProfilePage from "@/pages/common/ProfilePage";
import ProtectedRoute from "@/components/ProtectedRoute";
import GuestRoute from "@/components/GuestRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/login",
    element: <GuestRoute />,
    children: [
      {
        index: true,
        element: <LoginPag />,
      },
    ],
  },

  // Admin Routes

  {
    path: "in",
    element: <MainLayout />,
    children: [
      {
        path: "admin",
        element: <ProtectedRoute allowedRole="admin" />,
        children: [
          {
            index: true,
            element: <AdminDashboardPage />,
          },
          {
            path: "users",
            element: <UsersPage />,
          },
          {
            path: "users/:userId",
            element: <UserDetailsPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },

      // User Routes
      {
        path: "user",
        element: <ProtectedRoute allowedRole="user" />,
        children: [
          {
            index: true,
            element: <UserDashboardPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);
