import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import AnimateSection from "@/components/AnimateSection";

type productType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const products: productType[] = [
  {
    id: 1,
    name: "Totem Padrão",
    price: 3999.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/527400/console-playstation-5-sony-slim-branco-2-jogos-1000038899_1710512868_m.jpg",
  },
  {
    id: 2,
    name: "Totem Compacto",
    price: 2999.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/726389/jogo-death-stranding-2-on-the-beach-ps5-1000047637_1741786896_m.jpg",
  },
  {
    id: 3,
    name: "Impressora Térmica",
    price: 899.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/620992/monitor-gamer-lg-ultragear-27-ips-full-hd-180hz-1ms-displayport-e-hdmi-g-sync-freesync-hdr10-srgb-99-preto-27gs60f-b_1725043961_m.jpg",
  },
  {
    id: 4,
    name: "Scanner QR Code",
    price: 499.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/520289/notebook-lenovo-loq-intel-core-i5-16gb-rtx-2050-ssd-512gb-14-2k-windows-11-home-cinza-83eu0001br_1725907705_m.jpg",
  },
  {
    id: 5,
    name: "Módulo NFC",
    price: 299.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/520369/processador-amd-ryzen-7-5700x3d-3-6-ghz-4-1ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-video-integrado-100-100001503wof_1708023990_m.jpg",
  },
  {
    id: 6,
    name: "Tela Touch 21''",
    price: 1299.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/634677/iphone-16-pro-max-256gb-titanio-deserto_1726860800_m.jpg",
  },
  {
    id: 7,
    name: "Tela Touch 27''",
    price: 1899.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/sync_mirakl/693561/medium/Gabinete-Gamer-Ryvel-Cube-Screen-Mid-Tower-ATX-micro-ATX-e-mini-ITX-Vidro-Temperado_1742219436.png",
  },
  {
    id: 8,
    name: "Gabinete em Aço",
    price: 799.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/620992/monitor-gamer-lg-ultragear-27-ips-full-hd-180hz-1ms-displayport-e-hdmi-g-sync-freesync-hdr10-srgb-99-preto-27gs60f-b_1725043961_m.jpg",
  },
  {
    id: 9,
    name: "Software de Gerenciamento",
    price: 1499.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/369658/fonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0_1665770996_m.jpg",
  },
  {
    id: 10,
    name: "Bateria Backup",
    price: 699.99,
    quantity: 0,
    image:
      "https://images.kabum.com.br/produtos/fotos/470987/placa-de-video-rtx-4060-eagle-oc-gigabyte-nvidia-geforce-8gb-gdrr6-dlss-ray-tracing-gv-n4060eagle-oc-8gd_1687981181_m.jpg",
  },
];

export default function Ecommerce() {
  const [carrinho, setCarrinho] = useState<productType[]>([]);
  const [aberto, setAberto] = useState(false);

  const adicionarProduto = (product: productType) => {
    setCarrinho((prev) => {
      const itemExistente = prev.find((p) => p.id === product.id);
      if (itemExistente) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const alterarQuantidade = (id: number, delta: number) => {
    setCarrinho((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity + delta } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const total = carrinho.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <AnimateSection>
      <div className="text-black w-full h-full mx-auto p-6 rounded-xl flex flex-col ">
        <h1 className="text-4xl text-white font-bold mb-4">
          E-commerce de produtos
        </h1>
        <div className="flex flex-1 flex-col max-h-[calc(100vh-200px)] overflow-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((produto) => {
              const itemCarrinho = carrinho.find((p) => p.id === produto.id);
              return (
                <Card
                  key={produto.id}
                  className="p-4 flex flex-col items-center gap-2"
                >
                  <img src={produto.image} className="max-w-2/3" />

                  <p className="text-center font-semibold">{produto.name}</p>
                  <p className="text-gray-600">R$ {produto.price.toFixed(2)}</p>
                  {itemCarrinho ? (
                    <div className="flex items-center mt-2">
                      <Button
                        size="icon"
                        onClick={() => alterarQuantidade(produto.id, -1)}
                      >
                        <Minus />
                      </Button>
                      <span className="mx-2 font-bold">
                        {itemCarrinho.quantity}
                      </span>
                      <Button
                        size="icon"
                        onClick={() => alterarQuantidade(produto.id, 1)}
                      >
                        <Plus />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="mt-2"
                      onClick={() => adicionarProduto(produto)}
                    >
                      Adicionar
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        <Button
          className="mt-6 w-full flex items-center"
          onClick={() => setAberto(true)}
        >
          <ShoppingCart className="mr-2" /> Ver Carrinho
        </Button>

        {aberto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl w-1/2">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Carrinho</h2>
                <Button variant="ghost" onClick={() => setAberto(false)}>
                  <X />
                </Button>
              </div>

              {carrinho.length === 0 ? (
                <p className="text-gray-500 text-center mt-4">Carrinho vazio</p>
              ) : (
                <div className="mt-4 space-y-4">
                  {carrinho.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div className="flex items-center gap-4">
                        <img src={item.image} className="w-[50px]" />
                        <p>{item.name}</p>
                      </div>

                      <div className="flex items-center">
                        <Button
                          size="icon"
                          onClick={() => alterarQuantidade(item.id, -1)}
                        >
                          <Minus />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          size="icon"
                          onClick={() => alterarQuantidade(item.id, 1)}
                        >
                          <Plus />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 text-right font-bold text-lg">
                Total: R$ {total.toFixed(2)}
              </div>
              <Button className="mt-4 w-full">Finalizar Compra</Button>
            </div>
          </div>
        )}
      </div>
    </AnimateSection>
  );
}
