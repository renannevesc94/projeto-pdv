import { z } from "zod";

export const AuthSchema = z.object({
  email: z
    .string({ required_error: "Informe o email" })
    .email({ message: "Informe um Email válido." }),
  password: z
    .string({ required_error: "Informe a senha." })
    .min(6, { message: "Informe uma senha válida" }),
});

export type AuthType = z.infer<typeof AuthSchema>;
