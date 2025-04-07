import { ReactNode, useEffect } from "react";
import { useParams } from "react-router";
import { useConfiguration } from "@/hooks/useConfiguration";

export default function ProjectConfigMiddleware({
  children,
}: {
  children: ReactNode;
}) {
  const { ref } = useParams();
  const { load } = useConfiguration();

  useEffect(() => {
    load(ref || "");
  }, [ref]);

  return <>{children}</>;
}
