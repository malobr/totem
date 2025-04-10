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
    name: "Óculos de Sol",
    price: 399.99,
    quantity: 0,
    image:
      "https://oticaventura.com.br/media/catalog/product/cache/9ba351eae7556a2f5a5b3400a4759f80/i/m/img_0686_2.jpg",
  },
  {
    id: 2,
    name: "Limpa Óculos",
    price: 29.99,
    quantity: 0,
    image:
      "https://down-br.img.susercontent.com/file/sg-11134201-7rcdu-lskaxlzvstvlad",
  },
  {
    id: 3,
    name: "Lenço de limpeza",
    price: 8.99,
    quantity: 0,
    image:
      "https://http2.mlstatic.com/D_703787-MLB82479665783_022025-C.jpg",
  },
  {
    id: 4,
    name: "Óculos Gatinho",
    price: 400.99,
    quantity: 0,
    image:
      "https://a-static.mlcdn.com.br/1500x1500/armacao-oculos-grau-feminino-gatinho-rebecca-nude-palas-eyewear/olistplus/opmhonk378s7nka4/748d234baa2e13c96a42118fa5f65ff0.jpeg",
  },
  {
    id: 5,
    name: "Estojo Porta Óculos",
    price: 299.99,
    quantity: 0,
    image:
      "https://reidosestojos.vtexassets.com/arquivos/ids/156122-800-auto?v=635768129751870000&width=800&height=auto&aspect=true",
  },
  {
    id: 6,
    name: "Lentes de Contato",
    price: 1299.99,
    quantity: 0,
    image:
      "https://drmurilodomingues.com.br/wp-content/uploads/2017/10/lente-de-contato-rigida-em-curitiba.jpg",
  },
  {
    id: 7,
    name: "Óculos Infantil",
    price: 899.99,
    quantity: 0,
    image:
      "https://officina7.fbitsstatic.net/img/p/oculos-de-grau-ray-ban-infantil-ry1628-3951-48-89656/279961.jpg?w=1200&h=960&v=no-change&qs=ignore",
  },
  {
    id: 8,
    name: "Lentes para Óculos de sol",
    price: 799.99,
    quantity: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZwSWTAeKhk5AbnipZkMDYVoij5bNzmWePw&s",
  },
  {
    id: 9,
    name: "Óculos de sol Espelhado",
    price: 1499.99,
    quantity: 0,
    image:
      "https://espacoshop.com/cdn/shop/products/oculos-espelhado-redondo-240524.jpg?v=1694026566",
  },
  {
    id: 10,
    name: "Corda para segurar Óculos",
    price: 39.99,
    quantity: 0,
    image:
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwfwl6ywrdsie5",
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
