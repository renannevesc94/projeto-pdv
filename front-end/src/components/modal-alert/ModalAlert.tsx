import { CircleCheckIcon, OctagonX } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "../ui/dialog";

type ModalAlertProps = {
  message: string;
  isOpen: boolean;
  setOpen?: (open: boolean) => void;
  hasError: boolean;
};

export default function ModalAlert({ message, isOpen, setOpen, hasError }: ModalAlertProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent>
        <div className="flex items-center flex-col gap-2">
          {hasError ? (
            <OctagonX className="text-red-600 w-14 h-14" />
          ) : (
            <CircleCheckIcon className="w-14 h-14 text-green-600" />
          )}
          <span className="text-center text-xl">{message}</span>
        </div>
        <DialogFooter>
          <DialogClose className="w-full flex items-center justify-center mt-2">
            <Button variant={"default"}>OK</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
