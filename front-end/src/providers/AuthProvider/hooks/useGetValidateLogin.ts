import { useQuery } from "@tanstack/react-query";
import { getValidateLogin } from "../../../services";
import { AxiosError } from "axios";
import Cookies from "js-cookie";

export const useGetStateLogin = (onUnauthorized: () => void) => {
  return useQuery({
    queryKey: ["STATELOGIN"],
    queryFn: async () => {
      try {
        await getValidateLogin();
        const cookie = Cookies.get("authData") || "{}";
        const data = JSON.parse(cookie);
        return data;
      } catch (error: unknown) {
        if ((error as AxiosError).response?.status === 401) {
          console.log(error);
          onUnauthorized();
        }
      }
    },
    retry: false,
  });
};
