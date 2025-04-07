import { useConfiguration } from "@/hooks/useConfiguration";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router";

import BackgroundPattern from "@/components/backgroundPattern";
import ProjectLoading from "@/components/ProjectLoading";
import BackgroundTheme from "@/components/background";
import NavDemo from "@/components/navDemo";

const GlobalLayout = () => {
  const { loading, project } = useConfiguration();

  /*   useEffect(() => {
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault(); // Impede o menu de contexto de ser exibido
    });
  }, []); */

  if (loading && project === null) return <ProjectLoading />;

  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center flex-col overflow-hidden `}
    >
      <div className={`grow flex flex-col w-full h-full overflow-hidden `}>
        <Outlet />
      </div>
      {project?.ref === "demo" && <NavDemo />}
      <AppSidebar />
      <BackgroundPattern />
      <BackgroundTheme />
    </div>
  );
};

export default GlobalLayout;
