import { SidebarProvider } from "@/components/ui/sidebar";
import ProjectConfigMiddleware from "./ProjectConfigMiddleware";
import { Outlet } from "react-router";

export default function Middlewares() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <ProjectConfigMiddleware>{<Outlet />}</ProjectConfigMiddleware>
      </SidebarProvider>
    </>
  );
}
