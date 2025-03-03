import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthType } from "../types";
import { usePostLogin } from "./use-post-login";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const authForm = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, error } = usePostLogin({
    onSuccess: () => {
      navigate("/clientes");
    },

    onError: (error) => {
      return error.status === 401 ? (error.message = "Usuário ou senha inválidos") : error.message;
    },
  });

  const onSubmit = (data: AuthType) => {
    mutate(data);
  };
  return {
    authForm,
    onSubmit,
    error,
  };
}
