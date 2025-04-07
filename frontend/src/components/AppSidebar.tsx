import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "./ui/button";
import { useConfiguration } from "@/hooks/useConfiguration";
import { options } from "@/data/options";

export function AppSidebar() {
  const { changeTheme, theme } = useTheme();
  const { dispatch } = useConfiguration();

  const changePattern = (name: string) => {
    dispatch({ type: "SET_PATTERN", payload: name });
  };

  const changeLogo = (name: string) => {
    dispatch({ type: "SET_LOGO_IMAGE", payload: name });
  };

  return (
    <Sidebar side="right">
      <SidebarHeader>
        <div className="flex items-end justify-end p-1">
          <SidebarTrigger className="w-14 h-14" />
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup />
        <h1>Logos</h1>

        <div className="flex flex-wrap gap-1">
          {options.logoUrl.map((e) => (
            <Button onClick={() => changeLogo(e.name)} className="w-full h-15">
              <img src={e.src} className="h-full" />
            </Button>
          ))}
        </div>

        <SidebarGroup />
        <SidebarGroup />
        <h1>Color</h1>
        <div className="flex flex-wrap gap-1">
          {options.themes.map(({ from, name, text, to }) => (
            <Button
              onClick={() => changeTheme(name)}
              className={`bg-gradient-to-r ${from} ${to} ${text} border border-gray-500 ${
                name === theme && "border-white"
              } shadow w-16 h-16 text-xl`}
            >
              A
            </Button>
          ))}
        </div>
        <SidebarGroup />
        <SidebarGroup />
        <h1>Patterns</h1>
        {options.patterns.map((e) => (
          <Button
            onClick={() => changePattern(e.name)}
            className=" border h-16 text-xl"
          >
            {e.name}
          </Button>
        ))}

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
