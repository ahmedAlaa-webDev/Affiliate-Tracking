import { createBrowserRouter, Navigate } from "react-router-dom";

import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import UserDetailsPage from "@/pages/admin/UserDetailsPage";
import UsersPage from "@/pages/admin/UsersPage";
import LoginPag from "@/pages/auth/LoginPage";
import ProfilePage from "@/pages/user/ProfilePage";
import UserDashboardPage from "@/pages/user/UserDashboardPage";
import MainLayout from "@/layouts/MainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/login",
    element: <LoginPag />,
  },

  // Admin Routes

  {
    path: "in",
    element: <MainLayout />,
    children: [
      {
        path: "admin",
        children: [
          {
            path : "dashboard",
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
          // {
          //   path: "analytics",
          //   element: <AnalyticsPage />,
          // },
        ],
      },

      // User Routes
      {
        path: "user",
        children: [
          {
            index: true,
            path :"dashboard",
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
