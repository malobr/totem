import { options } from "@/data/options";
import { useConfiguration } from "@/hooks/useConfiguration";
export default function Logo() {
  const { project } = useConfiguration();
  const logo = options.logoUrl.filter((e) => e.name === project?.logoUrl)[0];

  return (
    <>
      {logo && (
        <img
          id={"logoid"}
          src={logo.src}
          className="max-w-[350px] w-full drop-shadow-[1px_1px_10px_rgba(255,255,255,0.6)] lg:max-w-[200px]"
        />
      )}
    </>
  );
}
