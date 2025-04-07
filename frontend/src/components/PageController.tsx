import { ClipboardIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { pages } from "@/utils/pages";
import PageButton from "./pagebutton";

export default function PageController() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((e) => !e);

  return (
    <div className="relative">
      <Button
        type="button"
        onClick={toggleIsOpen}
        className="absolute w-16 h-16"
      >
        <ClipboardIcon />
      </Button>
      {isOpen && (
        <motion.div
          key={"app-nav-pages"}
          initial={{ opacity: 0, scale: 0, y: "-100px" }}
          animate={{ opacity: 1, scale: 1, y: "0px" }}
          exit={{ opacity: 0, scale: 0, y: "-100px" }}
          className="flex flex-col relative left-17 top-0 gap-1"
        >
          {pages.map((page) => (
            <PageButton page={page} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
