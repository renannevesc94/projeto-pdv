import { deleteProduct } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { NewProductType } from "../types";

function useDeleteProduct() {
  return useMutation<NewProductType, AxiosError<{ message: string }>, string>({
    mutationFn: async (id: string) => {
      const { data } = await deleteProduct(id);
      return data;
    },
  });
}

export function useRemoveProduct() {
  const { mutate, error, isSuccess, data } = useDeleteProduct();

  async function onSubmit(id: string) {
    mutate(id, {});
  }

  return {
    onSubmit,
    error: error?.response?.data,
    isSuccess,
    data,
  };
}
