import TypingAnimation from "@/components/animations/TypingAnimation";
import { motion } from "framer-motion";
import { itemType } from "./hooks/useStore";

export default function Product({ product }: { product: itemType }) {
  return (
    <motion.div
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="bottom-0 flex flex-1 justify-center items-center flex-col w-full"
    >
      <div className="text-primary text-pretty">
        <h1 className="text-8xl font-bold">
          <p className="font-light text-6xl font-serif tracking-[12px]">
            <TypingAnimation duration={1} delay={0.1} text={product.name} />
          </p>
        </h1>
        <p className="font-light text-4xl font-serif tracking-[12px] opacity-70">
          <TypingAnimation duration={1} delay={3} text={product.tag} />
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <motion.img
          id={"itemImage-" + product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.3, // Duração da animação por palavra
            ease: "easeInOut",
          }}
          src={product.image_url}
          className="w-full lg:w-1/3 max-w-[500px]"
        ></motion.img>

        <div className="flex flex-col gap-5 text-primary lg:w-1/2">
          <p className="font-sans text-primary text-4xl font-light text-pretty w-full">
            <TypingAnimation
              duration={1}
              delay={0.1}
              text={product.description}
            />
          </p>
        </div>
      </div>
    </motion.div>
  );
}
