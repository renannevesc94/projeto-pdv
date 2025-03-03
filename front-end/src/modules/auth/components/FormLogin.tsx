import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/use-login";

export default function FormLogin() {
  const { authForm, onSubmit, error } = useLogin();

  return (
    <Form {...authForm}>
      <form onSubmit={authForm.handleSubmit(onSubmit)} className="w-2/3 space-y-3 mt-6">
        <FormField
          name="email"
          control={authForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="password"
          control={authForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
              {error ? (
                <span className="flex w-full text-[0.7rem] text-red-600 text-center">
                  {error.message}
                </span>
              ) : (
                ""
              )}
            </FormItem>
          )}
        ></FormField>
        <div className="flex w-full h-auto justify-end">
          <a className="text-[0.7rem] font-semibold text-muted-foreground" href="">
            Esqueci a senha
          </a>
        </div>
        <Button className="flex w-full justify-center mt-8 cursor-pointer" type="submit">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
