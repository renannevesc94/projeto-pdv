import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import RowActions from "./RowActions";

export type Products = {
  description: string;
  unit: string;
  cost: number;
  stock: number;
  price: number;
  id: string;
};

function formatToCurrency(value: number) {
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return formatted;
}

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "unit",
    header: "Unidade",
  },
  {
    accessorKey: "cost",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Custo" />,
    cell: ({ row }) => {
      return formatToCurrency(parseFloat(row.getValue("cost")));
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Estoque" />,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Preço de Venda" />,
    cell: ({ row }) => {
      return formatToCurrency(parseFloat(row.getValue("price")));
    },
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const product = row.original;
      return <RowActions productId={product.id} key={product.id} />;
    },
  },
];
