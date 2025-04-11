import { useConfiguration } from "@/hooks/useConfiguration";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import Logo from "@/components/Logo";
import heroImage from "@/assets/heros/Eye Health Doctor & Optical Solution Consultant Instagram Post.png";
import AnimateSection from "@/components/AnimateSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export default function FormContent() {
  const { project } = useConfiguration();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  if (!project?.ref)
    return (
      <section className="w-full h-full flex flex-col items-center gap-5 text-white">
        {project?.ref}x
      </section>
    );

  return (
    <AnimateSection>
      <div
        ref={containerRef}
        className="w-full h-full flex flex-col items-center justify-between text-center py-10 lg:py-0"
      >
        <div className="relative flex flex-col items-center w-full h-full">
          <Logo />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bottom-0 flex flex-1 lg:flex-col justify-center items-center flex-col w-full lg:max-w-4/5 gap-5 lg:gap-0"
          >
            <div className="text-primary text-pretty items-center justify-center">
              <motion.div
                className="text-8xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Optical
              </motion.div>

              <motion.div
                className="font-light text-3xl lg:text-lg font-serif tracking-[20px] border-b border-t border-primary opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                SOLUTIONS
              </motion.div>
            </div>

            <div className="lg:flex lg:flex-row lg:items-center lg:text-start lg:justify-between">
              <motion.div
                className="lg:w-1/2"
                style={{ y: imageY }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-[80%] mx-auto lg:max-w-[400px] lg:w-[70%] "
                />
              </motion.div>

              <motion.div
                className="flex flex-col lg:w-1/2 lg:flex-col lg:gap-5 items-center lg:items-start gap-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="font-serif text-primary text-4xl font-bold lg:text-3xl">
                  Nosso teste de visão <span className="text-blue-500">rápido</span> e <span className="text-blue-500">eficaz</span> fornece resultados imediatos.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => navigate(`/${project.ref}/t`)}
                    className="text-4xl lg:text-2xl font-bold w-full rounded-full px-20 py-10 lg:px-10 lg:py-8 bg-gradient-to-b from-zinc-400/30 to-zinc-500/30 text-white hover:from-zinc-400/70 hover:to-zinc-500/70 active:from-zinc-500/50 active:to-zinc-600/50 transition-all shadow-xl"
                  >
                    <Sparkles className="mr-2 animate-pulse" />
                    COMEÇAR TESTE
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-5 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="font-serif tracking-[12px] text-primary text-3xl hover:tracking-[20px] transition-all duration-300">
              www.seusite.com
            </p>
            <motion.p
              className="text-primary text-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" }}
            >
              Este teste simples ajudará a identificar possíveis dificuldades na sua visão.
            </motion.p>
          </motion.div>
        </div>

        {/* <SliderCatalog size="large" /> */}
      </div>
    </AnimateSection>
  );
}
