import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import { NavSidebar } from "../nav-side-bar/NavSidebar";

export default function Layout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <NavSidebar />
      <main className="w-screen h-screen flex items-center justify-center ">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
