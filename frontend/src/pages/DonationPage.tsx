import QRCode from "react-qr-code";

import donation1 from "@/assets/donation/donation1.png";
import AnimateSection from "@/components/AnimateSection";

export default function DonationPage() {
  /*   const [valor] = useState(10);
  const chavePix =
    "00020126330014BR.GOV.BCB.PIX0114+55819999999995204000053039865802BR5920Nome do Beneficiario6009SAO PAULO62070503***6304ABCD";

  const gerarPix = () => {
    return `${chavePix}540${valor.toFixed(2).replace(".", "")}`;
  }; */

  return (
    <AnimateSection>
      <div className="flex w-full h-full flex-col flex-1 items-center justify-center lg:flex-row lg:items-center">
        {donation1 && (
          <img src={donation1} className="object-fill h-[70vh] lg:h-screen" />
        )}
        <div className="max-w-md p-6  rounded-xl text-center text-primary">
          <h1 className="text-2xl font-bold mb-4">Faça uma Doação via Pix</h1>
          <QRCode
            value={
              "https://wa.me/554199700365?text=Olá,%20acessei%20o%20link%20por%20meio%20do%20QR%20Code%20do%20aparelho%20Adam%20Robo%20Off%20e%20gostaria%20de%20saber%20quais%20são%20as%20condições%20para%20adquirir%20o%20formulário%20online."
            }
            size={200}
            className="mx-auto p-1 bg-white"
          />
          <p className="mt-4">Escaneie o QR Code</p>
        </div>
      </div>
    </AnimateSection>
  );
}
