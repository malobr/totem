import { useConfiguration } from "@/hooks/useConfiguration";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import Logo from "@/components/Logo";
import heroImage from "@/assets/heros/Eye Health Doctor & Optical Solution Consultant Instagram Post.png";
import AnimateSection from "@/components/AnimateSection";

export default function FormContent() {
  const { project } = useConfiguration();
  const navigate = useNavigate();

  if (!project?.ref)
    return (
      <section className="w-full h-full flex flex-col items-center gap-5 text-white">
        {project?.ref}x
      </section>
    );

  return (
    <AnimateSection>
      <div className="w-full h-full flex flex-col items-center justify-between text-center py-10 lg:py-0">
        <div className="relative flex flex-col items-center w-full h-full">
          <Logo />
          <div className="bottom-0 flex flex-1 lg:flex-col justify-center items-center flex-col w-full lg:max-w-4/5 gap-5 lg:gap-0">
            <div className="text-primary text-pretty items-center justify-center">
              <div className="text-8xl lg:text-5xl font-bold">Optical</div>
              <div className="font-light text-3xl lg:text-lg font-serif tracking-[20px] border-b border-t border-primary opacity-80">
                SOLUTIONS
              </div>
            </div>

            <div className="lg:flex lg:flex-row lg:items-center lg:text-start lg:justify-between">
              <div className="lg:w-1/2">
                <img
                  src={heroImage}
                  className="w-[80%] mx-auto lg:max-w-[400px] lg:w-[70%]"
                ></img>
              </div>

              <div className="flex flex-col lg:w-1/2 lg:flex-col lg:gap-5 items-center lg:items-start gap-10">
                <p className="font-serif text-primary text-4xl font-bold lg:text-3xl">
                  Nosso teste de visão rápido e eficaz fornece resultados
                  imediatos.
                </p>
                <Button
                  onClick={() => navigate(`/${project.ref}/t`)}
                  className="text-4xl lg:text-2xl font-bold w-1/2 rounded-full px-20 py-10 lg:px-10 lg:py-8 bg-gradient-to-b from-zinc-400/30 from-50% to-zinc-500/30 to-50% text-white hover:from-zinc-400/70 hover:to-zinc-500/70 active:from-zinc-500/50 active:to-zinc-600/50"
                >
                  COMEÇAR TESTE
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-serif tracking-[12px] text-primary text-3xl">
              www.seusite.com
            </p>
            <p className="text-primary">
              Este teste simples ajudará a identificar possíveis dificuldades na
              sua visão.
            </p>
          </div>
        </div>

        {/* <SliderCatalog size="large" /> */}
      </div>
    </AnimateSection>
  );
}
