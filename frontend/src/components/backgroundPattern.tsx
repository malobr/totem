import { options } from "@/data/options";
import { useConfiguration } from "@/hooks/useConfiguration";
export default function BackgroundPattern() {
  const { project } = useConfiguration();
  const pattern = options.patterns.filter(
    (e) => e.name === project?.pattern
  )[0];
  return (
    <img
      src={pattern.src}
      className="absolute top-0 left-0 w-screen h-screen -z-10"
    />
  );
}
