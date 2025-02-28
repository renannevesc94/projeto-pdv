import { z } from "zod";

export const AuthSchema = z.object({
  email: z
    .string({
      required_error: "É necessário informar o email",
    })
    .email({ message: "Email inválido" }),

  password: z
    .string({
      required_error: "É necessário informar a senha",
      invalid_type_error: "Senha inválida",
    })
    .min(8),
});

export type AuthType = z.infer<typeof AuthSchema>;
