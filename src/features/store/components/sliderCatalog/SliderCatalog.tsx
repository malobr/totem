import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import  { itemType } from "../../hooks/useStore";


export default function SliderCatalog({
  handleSetItem,
  products,
}: {
  products: itemType[];
  handleSetItem: (id: string) => void;
}) {
  return (
    <div className="w-full bg-gradient-to-t to-transparent min-h-[150px] lg:max-w-[70%]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          containScroll: "trimSnaps",
        }}
        plugins={[Autoplay({ delay: 4000 })]}
        className="py-4"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={`product-key-${product.id}`}
              className={`text-center basis-1/3 lg:basis-1/5`}
            >
              <button onClick={() => handleSetItem(product.id)} className="">
                <img
                  src={product.image_url}
                  className="p-1 rounded-full border bg-gradient-to-b to-transparent shadow flex flex1 max-h-[300px] aspect-square object-contain"
                />
                <span className="text-white opacity-50">{product.modelo}</span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
