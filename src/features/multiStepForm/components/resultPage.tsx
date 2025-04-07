import Logo from "@/components/Logo";
import Lottie from "lottie-react";
import lottieAnimation from "@/assets/lottie/confetti.json";
import QRCode from "react-qr-code";
import { Link } from "react-router";

export default function ResultPage() {
  return (
    <article className="px-20 pt-20  lg:px-10 lg:pt-0 flex items-center flex-col overflow-hidden h-screen lg:h-auto">
      <Lottie
        animationData={lottieAnimation}
        className="absolute bottom-0 left-[50%] translate-x-[-50%] z-20 w-screen h-screen"
        loop={false}
      />

      <Logo />
      <div className="flex flex-col flex-1 items-center mt-20 lg:mt-5 text-center gap-10 lg:gap-5 text-3xl lg:text-xl text-primary z-30">
        <div className="text-4xl lg:text-3xl font-bold">
          Teste finalizado!!!
        </div>
        <div>
          O resultado será enviado para seu e-mail, ou faça login no site
          www.adamrobo.com/login
        </div>
        <div>Você tambem pode acessar o resultado usando o QRCode:</div>
        <QRCode
          value={"www.adamrobo.com"}
          size={200}
          className="mx-auto p-1 bg-white lg:mt-5 rounded"
        />

        <Link
          className="border border-primary rounded px-10 py-2 mt-5"
          to={`/demo/form`}
        >
          Voltar
        </Link>
      </div>
    </article>
  );
}
