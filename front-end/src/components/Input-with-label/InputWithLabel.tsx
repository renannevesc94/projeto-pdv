import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPropsWithoutRef } from "react";

type InputWithLabelProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export function InputWithLabel({ label, ...props }: InputWithLabelProps) {
  return (
    <div className="flex flex-col w-full  gap-1.5">
      <Label htmlFor={props.id}>{label}</Label>
      <Input {...props} />
    </div>
  );
}
