import { useForm } from "react-hook-form";
import { newProductSchema, NewProductType } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostProduct } from "./usePostProduct";
import { useCallback } from "react";

export function useCreateProduct() {
  const newProductForm = useForm<NewProductType>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      categoryId: 0,
      cost: 0,
      description: "",
      ean: "",
      min_stock: 0,
      price: 0,
      status: true,
      stock: 0,
      supplierId: 0,
      tags: "",
      unit: "",
    },
    shouldUnregister: false,
  });

  const { mutate, error, isError, isSuccess } = usePostProduct();

  const onSubmit = useCallback(
    (data: NewProductType) => {
      mutate(data, {
        onError: (error) => {
          console.log(error);
        },
      });
    },
    [mutate]
  );

  return {
    newProductForm,
    error: error?.response?.data.message || "Erro desconhecido",
    isError,
    isSuccess,
    onSubmit,
  };
}
