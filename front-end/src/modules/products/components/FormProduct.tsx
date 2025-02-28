import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

import { FormInputField } from "./FormInputField";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { useEffect, useState } from "react";
import ModalAlert from "@/components/modal-alert/ModalAlert";

export default function FormProduct() {
  const { onSubmit, newProductForm, error, isSuccess, isError } = useCreateProduct();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isSuccess || isError);
  }, [isError, isSuccess]);

  return (
    <>
      <Form {...newProductForm}>
        <form onSubmit={newProductForm.handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <div className="w-full">
              <FormField
                name="description"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField label="Descrição" formDescription="" field={field} />
                )}
              />
            </div>
            <div className="w-1/6">
              <FormField
                name="unit"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField label="Unidade" formDescription="" field={field} />
                )}
              />
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className="w-2/5">
              <FormField
                name="ean"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField label="EAN" formDescription="" field={field} />
                )}
              />
            </div>
            <div className="w-1/5">
              <FormField
                name="stock"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField label="Estoque" type="number" formDescription="" field={field} />
                )}
              />
            </div>
            <div className="w-1/5">
              <FormField
                name="min_stock"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField label="Estoque mínimo" type="number" field={field} />
                )}
              />
            </div>
            <div className="w-1/5">
              <FormField
                name="cost"
                control={newProductForm.control}
                render={({ field }) => <FormInputField label="Custo" type="number" field={field} />}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="w-2/5">
              <FormField
                name="categoryId"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField
                    label="Categoria"
                    formDescription=""
                    type="number"
                    field={field}
                  />
                )}
              />
            </div>
            <div className="w-1/5">
              <FormField
                name="supplierId"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField
                    label="Fornecedor"
                    type="number"
                    formDescription=""
                    field={field}
                  />
                )}
              />
            </div>
            <div className="w-1/5">
              <FormField
                name="status"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField label="Status" formDescription="" field={field} />
                )}
              />
            </div>
            <div className="w-1/5">
              <FormField
                name="price"
                control={newProductForm.control}
                render={({ field }) => (
                  <FormInputField
                    label="Preço de venda"
                    type="number"
                    formDescription=""
                    field={field}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-full flex items-end justify-end  gap-2 mt-5">
            <DialogClose>
              {/*  <Button type="button" variant={"destructive"}>
                Cancelar
              </Button> */}
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </div>
          <ModalAlert
            isOpen={open}
            setOpen={setOpen}
            hasError={isError}
            message={isSuccess ? "Produto cadastrado com sucesso!" : error}
          />
        </form>
      </Form>
    </>
  );
}
