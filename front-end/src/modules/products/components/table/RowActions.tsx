import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useRemoveProduct } from "../../hooks/useDeleteProduct";
import ModalAlert from "@/components/modal-alert/ModalAlert";
import { useEffect, useState } from "react";
import { ModalProduct } from "../ModalProduct";
import useGetProductById from "../../hooks/useGetProductById";

export default function RowActions({ productId }: { productId: string }) {
  const { onSubmit, isSuccess, error, data: deletedProduct } = useRemoveProduct();
  const { refetch } = useGetProductById("8ed76024-f317-407f-b16f-be94e5504cb6");

  const [openModal, setOpenModal] = useState(false);
  const [stateModalProduct, setStateModalProduct] = useState(false);

  async function handleSubmit() {
    const response = await refetch();
    console.log(response);
  }

  useEffect(() => {
    setOpenModal(!!error || isSuccess);
  }, [isSuccess, error]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-full w-11">
          <MoreHorizontal className="h-full w-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Opções</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            handleSubmit();
          }}
          className="cursor-pointer"
          key={crypto.randomUUID()}
        >
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            onSubmit(productId);
          }}
          className="cursor-pointer"
          key={crypto.randomUUID()}
        >
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
      <ModalAlert
        isOpen={openModal}
        setOpen={setOpenModal}
        hasError={!!error}
        message={
          isSuccess
            ? `${deletedProduct?.description} foi removido! `
            : error?.message || "Erro desconhecido"
        }
      />
      <ModalProduct
        dialogTrigger={false}
        isOpen={stateModalProduct}
        setOpen={setStateModalProduct}
      />
    </DropdownMenu>
  );
}
