import formPagesData from "@/utils/FormPagesData";
import FormPage from "../components/FormPage";
import { useStepForm } from "../hooks/useStepForm";
import { pageType } from "../types/formTypes";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useConfiguration } from "@/hooks/useConfiguration";
import Logo from "@/components/Logo";
import ResultPage from "../components/resultPage";

export default function MultiStepForm() {
  const data: pageType[] = formPagesData;
  const { step, resetSteps } = useStepForm();
  const { project } = useConfiguration();
  const navigate = useNavigate();

  useEffect(() => {
    if (!project?.ref) navigate("/");

    return () => {
      resetSteps();
    };
  }, []);

  if (step >= formPagesData.length) return <ResultPage />;

  return (
    <section className={`flex flex-1 justify-center mt-20 lg:mt-0`}>
      <div className="flex flex-col gap-5 lg:gap-1 items-center w-full">
        <Logo />
        <AnimatePresence mode="wait">
          {data
            .filter((e) => e.pageNumber === step)
            .map((element) => (
              <FormPage key={element.pageNumber} formData={element} />
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
