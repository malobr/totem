import { Menu, Undo2 } from "lucide-react";
import PageController from "./PageController";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import { useConfiguration } from "@/hooks/useConfiguration";
import { useNavigate } from "react-router";

export default function NavDemo() {
  const [visibleOptions, setVisibleOptions] = useState(false);
  const { project } = useConfiguration();
  const navigate = useNavigate();

  const toggleOptions = () => setVisibleOptions((e) => !e);

  return (
    <div className="flex flex-col absolute top-1 left-1 gap-1 items-start">
      <Button onClick={toggleOptions} className="bg-transparent w-16 h-16">
        <Menu />
      </Button>

      {project?.ref === "demo" && visibleOptions && (
        <motion.div
          key={"app-nav-options"}
          initial={{ opacity: 0, scale: 0, y: "-100px" }}
          animate={{ opacity: 1, scale: 1, y: "0px" }}
          exit={{ opacity: 0, scale: 0, y: "-100px" }}
          className="flex flex-col items-start gap-1"
        >
          <Button onClick={() => navigate("/")} className="w-16 h-16">
            <Undo2 />
          </Button>
          <SidebarTrigger className="w-16 h-16" />
          <PageController />
        </motion.div>
      )}
    </div>
  );
}
