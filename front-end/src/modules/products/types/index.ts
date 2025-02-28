import { z } from "zod";

export const newProductSchema = z.object({
  description: z
    .string({ required_error: "Informe uma descrição válida" })
    .min(4, { message: "Mínimo de 4 caracteres" }),
  ean: z.string().min(2, { message: "Mínimo de 2 caracteres" }),
  unit: z.string().min(2, { message: "Mínimo de 2 caracteres" }),
  cost: z.coerce.number().min(0, "Preço de custo inválido"),
  price: z.coerce.number().min(0.1, "Preço de venda inválido"),
  stock: z.coerce.number().min(1, "Estoque inválido"),
  status: z.boolean(),
  min_stock: z.coerce.number().min(1, "Estoque mínimo inválido"),
  categoryId: z.coerce.number().min(1, "Categoria inválida"),
  supplierId: z.coerce.number().min(1, "Estoque inválido"),
  tags: z.string(),
});

export type NewProductType = z.infer<typeof newProductSchema>;
