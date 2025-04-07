import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Loader } from "lucide-react";

import food1 from "@/assets/fastfood/food1.jpeg";
import food2 from "@/assets/fastfood/xbacon.jpeg";
import food3 from "@/assets/fastfood/xfrango.avif";
import food4 from "@/assets/fastfood/xsalada.jpeg";
import food5 from "@/assets/fastfood/xtudo.jpeg";
import food6 from "@/assets/fastfood/hotdog.jpeg";
import combo1 from "@/assets/fastfood/combo1.jpg";
import c2 from "@/assets/fastfood/2.jpeg";
import c3 from "@/assets/fastfood/c3.jpg";
import c4 from "@/assets/fastfood/4.avif";
import c5 from "@/assets/fastfood/5.jpg";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";
import AnimateSection from "@/components/AnimateSection";

const foods = [
  {
    id: 1,
    name: "Cheeseburger",
    description: "Pão, carne, queijo, alface, tomate",
    price: 19.99,
    image: food1,
  },
  {
    id: 2,
    name: "X-Bacon",
    description: "Pão, carne, queijo, bacon, molho especial",
    price: 22.99,
    image: food2,
  },
  {
    id: 3,
    name: "X-Frango",
    description: "Pão, frango empanado, queijo, alface, maionese",
    price: 21.99,
    image: food3,
  },
  {
    id: 4,
    name: "X-Salada",
    description: "Pão, carne, queijo, alface, tomate, maionese",
    price: 18.99,
    image: food4,
  },
  {
    id: 5,
    name: "X-Tudo",
    description:
      "Pão, carne, queijo, bacon, frango empanado, alface, tomate, maionese, ketchup, mostarda",
    price: 27.99,
    image: food5,
  },
  {
    id: 6,
    name: "Hot Dog",
    description: "Pão, salsicha, ketchup, mostarda, maionese",
    price: 14.99,
    image: food6,
  },
];

const combos = [
  {
    id: 1,
    name: "Combo Clássico",
    description: "Lanche + Batata + Refrigerante",
    price: 29.99,
    image: combo1,
  },
  {
    id: 2,
    name: "Combo Duplo",
    description: "Dois lanches + Batata + Refrigerante",
    price: 39.99,
    image: c2,
  },
  {
    id: 3,
    name: "Combo Família",
    description: "Três lanches + Batata grande + Dois Refrigerantes",
    price: 49.99,
    image: c3,
  },
  {
    id: 4,
    name: "Combo Vegetariano",
    description: "Lanche vegetariano + Batata + Suco natural",
    price: 34.99,
    image: c4,
  },
  {
    id: 5,
    name: "Combo Kids",
    description: "Lanche pequeno + Batata pequena + Suco",
    price: 19.99,
    image: c5,
  },
  {
    id: 5,
    name: "Sem Combo",
    description: "",
    price: 0,
    image: food1,
  },
];

type lancheType = {
  lanche: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  } | null;
  combo: {
    id: number;
    name: string;
    price: number;
    image: string;
  } | null;
};

export default function FastFoodPage() {
  const [etapa, setEtapa] = useState(1);
  const [pedido, setPedido] = useState<lancheType>({
    lanche: null,
    combo: null,
  });
  const [pagando, setPagando] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  const avancar = () => setEtapa(etapa + 1);
  const retroceder = () => setEtapa(etapa - 1);
  const resetar = () => {
    setPedido({ lanche: null, combo: null });
    setEtapa(1);
    setFinalizado(false);
  };

  const finalizarCompra = () => {
    setPagando(true);
    setTimeout(() => {
      setPagando(false);
      setFinalizado(true);
      setEtapa(4);
    }, 3000);
  };

  return (
    <AnimateSection>
      <div className="max-w-lg lg:max-w-[80%] mx-auto p-6 text-primary">
        <header className="flex items-center justify-center p-5">
          <Logo />
        </header>
        <h1 className="text-2xl font-bold mb-4 flex justify-between">
          Compra de FastFood
          <Button variant="outline" onClick={resetar}>
            Reiniciar
          </Button>
        </h1>

        {etapa === 1 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Escolha seu lanche</h2>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }, // Estabelece o atraso entre os filhos
                },
              }}
              className="w-full flex flex-wrap lg:flex-row lg:flex-wrap lg:gap-5 gap-5 justify-center"
            >
              {foods.map((food) => (
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  key={food.id}
                  className="flex items-center jus gap-2 p-4 border-b cursor-pointer bg-white/10 active:bg-white/20 rounded-xl lg:w-[45%] w-full"
                  onClick={() => {
                    setPedido({ ...pedido, lanche: food });
                    avancar();
                  }}
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold">{food.name}</h3>
                    <p className="text-lg opacity-70">{food.description}</p>
                    <p className="font-semibold">R$ {food.price.toFixed(2)}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}

        {etapa === 2 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Escolha um combo</h2>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }, // Estabelece o atraso entre os filhos
                },
              }}
              className="w-full flex flex-wrap lg:flex-row lg:flex-wrap lg:gap-5 gap-5 justify-center"
            >
              {combos.map((combo) => (
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  key={combo.id}
                  className="flex items-center jus gap-2 p-4 border-b cursor-pointer bg-white/10 active:bg-white/20 rounded-xl lg:w-[45%] w-full"
                  onClick={() => {
                    setPedido({ ...pedido, combo: combo });
                    avancar();
                  }}
                >
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{combo.name}</h3>
                    <p className="text-sm opacity-70">{combo.description}</p>
                    <p className="font-semibold">R$ {combo.price.toFixed(2)}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}

        {etapa === 3 && (
          <div>
            <h2 className="text-xl font-semibold">Resumo do Pedido</h2>

            <div className="flex gap-4 mt-4">
              <div>
                {pedido.lanche && (
                  <>
                    <img
                      src={pedido.lanche.image}
                      alt={pedido.lanche.name}
                      className="w-20 h-20 object-cover"
                    />
                    {pedido.lanche.name}
                  </>
                )}
              </div>
              <div>
                {pedido.combo && (
                  <>
                    <img
                      src={pedido.combo.image}
                      alt={pedido.combo.name}
                      className="w-20 h-20 object-cover"
                    />
                    {pedido.combo.name}
                  </>
                )}
              </div>
            </div>

            <p className="mt-2 font-semibold">
              Total: R${" "}
              {(
                (pedido.lanche?.price || 0) + (pedido.combo?.price || 0)
              ).toFixed(2)}
            </p>
            <Input placeholder="Número do Cartão" className="mt-2" />
            <div className="flex gap-2 mt-4">
              <Button className="w-full" onClick={finalizarCompra}>
                {pagando ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Finalizar Compra"
                )}
              </Button>
              <Button className="w-full" variant="outline" onClick={resetar}>
                Cancelar
              </Button>
            </div>
            <Button
              className="mt-2 w-full"
              variant="outline"
              onClick={retroceder}
            >
              Voltar
            </Button>
          </div>
        )}

        {etapa === 4 && finalizado && (
          <Card className="mt-4 text-center p-6">
            <CardContent>
              <CheckCircle className="text-green-500 w-12 h-12 mx-auto" />
              <h2 className="text-xl font-bold mt-2">Compra Finalizada!</h2>
              <p className="opacity-70">Seu pedido está sendo preparado.</p>
              <Button className="mt-4" onClick={resetar}>
                Fazer novo pedido
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </AnimateSection>
  );
}
