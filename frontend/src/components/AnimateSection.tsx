import { motion } from "framer-motion";
import { ReactNode } from "react";
export default function AnimateSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: -10 }}
      className="h-full w-full"
    >
      {children}
    </motion.section>
  );
}
