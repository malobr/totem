import LoadingAnimation from "@/assets/loadingAnimation.json";
import Lootie from "lottie-react";

export default function Loading() {
  return (
    <Lootie
      animationData={LoadingAnimation}
      className="absolute w-[300px] h-[300px] -z-0"
    />
  );
}
