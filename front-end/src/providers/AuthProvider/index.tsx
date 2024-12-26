import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  login() {},
  logout() {},
  isAuthenticated: false,
});

const useAuthBase = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => {
    setIsAuthenticated(true);
    navigate("/home");
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    navigate("/");
  }, []);

  return {
    login,
    logout,
    isAuthenticated,
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
