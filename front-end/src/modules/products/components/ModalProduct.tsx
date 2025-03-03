import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SquarePlus } from "lucide-react";
import FormProduct from "./FormProduct";

export function ModalProduct({
  dialogTrigger,
  isOpen,
  setOpen,
}: {
  isOpen?: boolean;
  dialogTrigger: boolean;
  setOpen?: (open: boolean) => void;
}) {
  console.log("CHAMOU O MODAL");
  return (
    <Dialog modal={true} open={isOpen} onOpenChange={setOpen && setOpen}>
      {dialogTrigger && (
        <DialogTrigger asChild>
          <Button variant="default">
            <SquarePlus />
            Novo produto
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[760px]">
        <DialogHeader>
          <DialogTitle>Novo Produto</DialogTitle>
          <DialogDescription>Insira as informações necessárias</DialogDescription>
        </DialogHeader>
        <div className="grid ">
          <div className="flex gap-4">
            <FormProduct />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
