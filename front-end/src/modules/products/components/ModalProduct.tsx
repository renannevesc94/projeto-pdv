import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { FormProduct } from "./FormProduct";

export function ModalProduct({
  isOpen,
  setOpen,
}: {
  isOpen?: boolean;
  dialogTrigger: boolean;
  setOpen?: (open: boolean) => void;
}) {
  return (
    <Dialog modal={true} open={isOpen} onOpenChange={setOpen && setOpen}>
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
