import { motion } from "framer-motion";
import PageButton from "@/components/pagebutton";
import { pages } from "@/utils/pages";
import homepageImage from "@/assets/backgrounds/homepage.png";
import adamLogo from "@/assets/logos/adam_normal.svg";

export default function HomePage() {
  return (
    <div className="p-10 lg:p-0 relative">
      <img
        src={homepageImage}
        className="w-screen h-screen absolute -z-10 left-0 top-0 object-cover"
        alt="Fundo da Página"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl text-white font-bold text-center flex flex-col gap-4 items-center [text-shadow:_0_1px_2px_rgb(0_0_0_/_70%)]"
      >
        <motion.img
          src={adamLogo}
          alt="Logo Adam Robo"
          className="w-32 h-auto"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />

        <motion.h1
          className="text-5xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Adam Robo Totens
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Bem-vindo, esta é uma demonstração do sistema de totens Adam Robo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Selecione uma demonstração:
        </motion.p>

        <motion.div
          className="flex flex-col max-w-[400px] w-full gap-2 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {pages.map((page, index) => (
            <motion.div
            key={page.url || index}
            whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <PageButton page={page} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
