import { useForm } from "react-hook-form";
import { AuthSchema, AuthType } from "../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostAuth } from "./usePostAuth";

import { useAuth } from "../../../providers/AuthProvider";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
  });

  const { login } = useAuth();

  const { mutate, error } = usePostAuth({
    onSuccess: (response) => {
      console.log(response.status);
      login();
    },

    onError: (err) => {
      return err.status === 401 ? "Acesso não autorizado" : err.message;
    },
  });

  const onSubmit = (data: AuthType) => {
    mutate(data);
  };
  return {
    register,

    handleSubmit: handleSubmit(onSubmit),
    errors,
    error,
  };
};
