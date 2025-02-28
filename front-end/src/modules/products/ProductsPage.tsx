import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProductOverviewCard from "./components/ProductOverviewCard";
import { DataTable } from "./components/table/DataTable";
import { columns } from "./components/table/colums";
import { useGetProducts } from "./hooks/useGetProducts";
import { ModalProduct } from "./components/ModalProduct";

export default function ProductsPage() {
  const { data: products } = useGetProducts();

  return (
    <div className="w-full h-full p-4 ">
      <div className="w-full bg-background border shadow-lg rounded-2xl">
        <header className="w-full h-24 border-b-2  flex ">
          <h1 className="font-semibold text-2xl p-2">Produtos</h1>
          <div className="h-full w-1/3 ml-8 flex items-center">
            <div className="relative w-full">
              <Search className="absolute right-1 top-1" />
              <Input
                placeholder="Busca por código ou descrição..."
                className=" focus-visible:ring-0"
              />
            </div>
          </div>
          <div className="w-2/3  flex items-center gap-3 p-1 ml-14">
            <ProductOverviewCard title="Total de rodutos" content="1500" footer="+10" />
            <ProductOverviewCard title="Saldo de custo" content="R$ 11.500,00" footer="-50" />
            <ProductOverviewCard title="Saldo financeiro" content="R$ 21.500,00" footer="+50" />
          </div>
          <div className="flex items-center justify-end mr-4">
            <ModalProduct dialogTrigger />
          </div>
        </header>

        <div className="p-4">
          <div className="max-h-[calc(100vh-160px)] overflow-auto">
            <DataTable columns={columns} data={products ? products : []} />
          </div>
        </div>
      </div>
    </div>
  );
}
