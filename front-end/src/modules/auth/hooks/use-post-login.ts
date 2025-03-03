import { postAuth } from "@/services";
import { MutateOptions, useMutation } from "@tanstack/react-query";
import { AuthType } from "../types";
import { AxiosError, AxiosResponse } from "axios";

type SuccessResponse = AxiosResponse<{
  message: string;
  role: string;
}>;

type ErrorResponse = AxiosError<{
  message: string;
}>;

export function usePostLogin(options?: MutateOptions<SuccessResponse, ErrorResponse, AuthType>) {
  return useMutation<SuccessResponse, ErrorResponse, AuthType>({
    mutationFn: async ({ email, password }: AuthType) => {
      return await postAuth({ email, password });
    },
    ...options,
  });
}
