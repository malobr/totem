import Logo from "@/components/Logo";
import SliderCatalog from "./sliderCatalog/SliderCatalog";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import useStore from "../hooks/useStore";
import Product from "../Product";
export default function ProductContent() {
  const [show, setShow] = useState<string>("1");
  const { items } = useStore();

  const handleSetItem = (id: string) => setShow(id);

  return (
    <section className="w-full h-full flex flex-col items-center justify-between text-center p-10 pb-2">
      <div className="relative flex flex-col items-center w-full h-full  overflow-hidden">
        <Logo />
        <AnimatePresence mode="wait">
          {items
            .filter((e) => e.id === show)
            .map((element) => (
              <Product key={"product-idx-" + element.id} product={element} />
            ))}
        </AnimatePresence>
        <SliderCatalog
          handleSetItem={handleSetItem}
          products={items}
        />
      </div>

    </section>
  );
}
