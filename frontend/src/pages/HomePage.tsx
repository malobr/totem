import PageButton from "@/components/pagebutton";
import { pages } from "@/utils/pages";
import homepageImage from "@/assets/backgrounds/homepage.png";
import adamLogo from "@/assets/logos/adam_normal.svg";

export default function HomePage() {
  return (
    <div className=" p-10 lg:p-0">
      <img
        src={homepageImage}
        className="w-screen h-screen absolute -z-10 left-0 top-0 object-cover"
      />
      <div className=" text-2xl text-white font-bold text-center flex flex-col gap-4 items-center [text-shadow:_0_1px_2px_rgb(0_0_0_/_70%)]">
        <img src={adamLogo} />
        <h1 className="text-5xl ">Adam Robo Totens</h1>
        <p>
          Bem Vindo, esta é uma demonstração do sistema de totens Adam Robo.
        </p>
        <p>Selecione uma demonstração:</p>
        <div className="flex flex-col max-w-[400px] w-full gap-2 items-center">
          {pages.map((page) => (
            <PageButton page={page} />
          ))}
        </div>
      </div>
    </div>
  );
}
