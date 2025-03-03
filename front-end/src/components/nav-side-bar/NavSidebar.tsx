import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMenu } from "./NavMenu";
import {
  CircleDollarSign,
  ClipboardPlus,
  LayoutDashboard,
  LogOut,
  MonitorSmartphone,
  ScanBarcode,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Produtos",
      url: "/produtos",
      icon: ScanBarcode,
      isActive: false,
      items: [
        {
          title: "Fornecedores",
          url: "#",
        },
        {
          title: "Categorias",
          url: "#",
        },
      ],
    },
    {
      title: "Clientes",
      url: "/clientes",
      icon: User,
      isActive: true,
    },
    {
      title: "Vendas",
      url: "#",
      icon: CircleDollarSign,
      isActive: false,
    },

    {
      title: "Relatórios",
      url: "#",
      icon: ClipboardPlus,
      isActive: false,
      items: [
        {
          title: "Vendas por produto",
          url: "#",
        },
        {
          title: "Vendas por clientes",
          url: "#",
        },
        {
          title: "Saldo de produtos",
          url: "#",
        },
        {
          title: "Vendas por produto",
          url: "#",
        },
      ],
    },
    {
      title: "Frente de Caixa (PDV)",
      url: "#",
      icon: MonitorSmartphone,
      isActive: true,
    },
  ],
};

export function NavSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" className="font-semibold">
      <SidebarHeader>
        {/* SIDEBAR HEADER */}

        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-10 w-10 flex items-center justify-center rounded-lg">
                    <AvatarImage src={"/logo.png"} alt={"Renan"} />
                    <AvatarFallback className="rounded-lg">PDV</AvatarFallback>
                  </Avatar>

                  {open && (
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{"Renan"}</span>
                      <span className="truncate text-xs">{"renan.epd@gmail.com"}</span>
                      <span className="truncate text-xs">{"Nível: Admin"}</span>
                    </div>
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
          <SidebarMenuItem></SidebarMenuItem>
        </SidebarMenu>
        {/* SIDEBAR HEADER */}
      </SidebarHeader>
      <SidebarContent>
        {/* CONTEUDO PRINCIPAL */}
        <NavMenu items={data.navMain} />
        {/* CONTEUDO PRINCIPAL */}
      </SidebarContent>
      {/* FOOOTER */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              className="[&>svg]:size-6 group-data-[collapsible=icon]:[&>svg]:ml-1"
            >
              <LogOut />
              <span>Sair do Sistema</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      {/* FOOOTER */}
    </Sidebar>
  );
}
