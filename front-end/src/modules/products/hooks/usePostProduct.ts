import { postProduct } from "@/services";
import { MutateOptions, useMutation } from "@tanstack/react-query";
import { NewProductType } from "../types";
import { AxiosError, AxiosResponse } from "axios";

type sucessResponse = AxiosResponse<NewProductType>;

type errorResponse = AxiosError<{
  message: string;
}>;

export function usePostProduct(
  options?: MutateOptions<sucessResponse, errorResponse, NewProductType>
) {
  return useMutation<sucessResponse, errorResponse, NewProductType>({
    mutationFn: async (newProduct: NewProductType) => {
      const response = await postProduct(newProduct);
      return response;
    },
    ...options,
  });
}
