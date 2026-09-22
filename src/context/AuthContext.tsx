
import type { UserData } from "@/types/UserData";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Role = "admin" | "user" | null;

type AuthContextType = {
  user: UserData | null;
  role: Role;
  loading: boolean;
  setUser: (user: UserData | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUserState] = useState<UserData | null>(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loading] = useState(false);

  const role: Role = user?.role ?? null;

  const setUser = (userData: UserData | null) => {
    setUserState(userData);

    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  };

  const logout = () => {
    setUserState(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loading,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};

