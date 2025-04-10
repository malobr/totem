import image1 from "@/assets/glasses/glasses1.png";
import image2 from "@/assets/glasses/glasses2.png";
import image3 from "@/assets/glasses/glasses3.png";
import image4 from "@/assets/glasses/glasses4.png";
import image5 from "@/assets/glasses/glasses5.png";

export type itemType = {
  id: string;
  name: string;
  tag: string;
  description: string;
  modelo: string;
  cor: string;
  material: string;
  image_url: string;
};

export default function useStore() {
  const items: itemType[] = [
    {
      id: "1",
      name: "Vision X Pro",
      tag: "Classic",
      description:
        "O Vision X Pro combina elegância e inovação, oferecendo um design moderno e elegante contra raios UV",
      modelo: "Redondo 001",
      cor: "Preto",
      material: "Acetato",
      image_url: image1,
    },
    {
      id: "2",
      name: "Óculos Retangular",
      tag: "Classic",
      description:
        "Óculos de formato retangular, perfeito para rostos arredondados.",
      modelo: "Retangular 002",
      cor: "Preto",
      material: "Acetato",
      image_url: image2,
    },
    {
      id: "3",
      name: "Óculos Aviador",
      tag: "Classic",
      description:
        "Óculos aviador clássico, combina com rostos de todos os formatos.",
      modelo: "Aviador 003",
      cor: "Dourado",
      material: "Metal",
      image_url: image3,
    },
    {
      id: "4",
      name: "Óculos Cat Eye",
      tag: "Classic",
      description:
        "Óculos com design em forma de 'olho de gato', perfeito para um look fashion.",
      modelo: "Cat Eye 004",
      cor: "Rosa",
      material: "Plástico",
      image_url: image4,
    },
    {
      id: "5",
      name: "Óculos Redondo",
      tag: "Classic",
      description: "Óculos de formato redondo, ideal para rostos quadrados.",
      modelo: "Redondo 001",
      cor: "Amarelo",
      material: "Acetato",
      image_url: image5,
    },
  ];

  const getItemById = (id: string): itemType => {
    return items.filter((item) => item.id === id)[0];
  };

  return { items, getItemById };
}
