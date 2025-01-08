import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getValidateLogin } from "../../services";
import { getAuthData } from "./utils";
import { AxiosError } from "axios";
import { useEffect } from "react";

export const useAuth = (requiredRole?: string) => {
  const navigate = useNavigate();
  const local = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["STATELOGIN"],
    queryFn: async () => {
      try {
        await getValidateLogin();
        return getAuthData();
      } catch (error: unknown) {
        if ((error as AxiosError).response?.status === 401) {
          console.log("Não autorizado");
          return null;
        }
        throw error;
      }
    },
    retry: false,
  });

  const hasAccess = data && (!requiredRole || data.role === requiredRole);

  useEffect(() => {
    if (!isLoading && !hasAccess) {
      if (local.pathname === "/home") {
        navigate("/");
        return;
      }
      alert("Acesso não autorizado");

      navigate(-1);
    }
  }, [isLoading, hasAccess, navigate, local.pathname]);

  return {
    hasAccess,
    isLoading,
  };
};
