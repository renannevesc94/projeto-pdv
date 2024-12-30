import { MutateOptions, useMutation } from "@tanstack/react-query";
import { postAuth } from "../../../services";
import { AxiosError, AxiosResponse } from "axios";

type Params = {
  email: string;
  password: string;
};

type SuccessResposne = AxiosResponse<{
  message: string;
  role: string;
}>;

type ErrorResponse = AxiosError<{
  message: string;
}>;
export const usePostAuth = (options: MutateOptions<SuccessResposne, ErrorResponse, Params>) => {
  return useMutation({
    mutationFn: async ({ email, password }) => await postAuth({ email, password }),
    ...options,
  });
};
