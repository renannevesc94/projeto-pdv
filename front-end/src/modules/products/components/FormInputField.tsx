import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { memo, ReactElement } from "react";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

type FormInputFieldProps<T extends FieldValues> = {
  label: string;
  formDescription?: string;
  type?: string;
  field: ControllerRenderProps<T, Path<T>>;
};

export const FormInputField = memo(function FieldForm<T extends FieldValues>({
  label,
  formDescription,
  field,
  type = "text",
}: FormInputFieldProps<T>) {
  return (
    <FormItem className="space-y-1">
      <FormLabel className="ml-1">{label}</FormLabel>
      <FormControl>
        <Input type={type} placeholder={label} {...field} />
      </FormControl>
      <FormMessage />
      <FormDescription>{formDescription}</FormDescription>
    </FormItem>
  );
}) as <T extends FieldValues>(props: FormInputFieldProps<T>) => ReactElement;
