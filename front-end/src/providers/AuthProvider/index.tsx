import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  login: (role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  role?: string;
};

const AuthContext = createContext<AuthContextType>({
  login() {},
  logout() {},
  isAuthenticated: false,
  role: "",
});

const useAuthBase = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("");

  const login = useCallback((role: string) => {
    setIsAuthenticated(true);
    setRole(role);
    navigate("/home");
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setRole("");
    navigate("/");
  }, []);

  return {
    login,
    logout,
    isAuthenticated,
    role,
  };
};

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useAuthBase();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw "Invalid AuthContext";
  }
  return context;
};
