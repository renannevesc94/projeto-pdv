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
import { useCallback, useEffect, useState } from "react";
import { ModalProduct } from "../ModalProduct";
import useGetProductById from "../../hooks/useGetProductById";
import { useProductContext } from "../../providers/CurrentProductProvider";

export default function RowActions({ productId }: { productId: string }) {
  const { onSubmit, isSuccess, error, data: deletedProduct } = useRemoveProduct();
  const { refetch } = useGetProductById(productId);
  const { setCurrentProduct, setIsEditing } = useProductContext();

  const [openModal, setOpenModal] = useState(false);
  const [stateModalProduct, setStateModalProduct] = useState(false);

  const handleSubmit = useCallback(async () => {
    const { data } = await refetch();
    if (data) {
      setCurrentProduct(data);
      setIsEditing(true);
      setStateModalProduct(true);
    }
  }, [refetch, setCurrentProduct, setIsEditing]);

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
      {stateModalProduct && (
        <ModalProduct
          dialogTrigger={false}
          isOpen={stateModalProduct}
          setOpen={setStateModalProduct}
        />
      )}
    </DropdownMenu>
  );
}
