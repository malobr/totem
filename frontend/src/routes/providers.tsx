import { ReactNode, useEffect } from "react";
import i18n from "@/lang";

import { ConfigurationProvider } from "@/context/configurationContext/provider";
import { StepFormContextProvider } from "@/features/multiStepForm/context/pagination";
import { I18nextProvider } from "react-i18next";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Aplicando a rotação diretamente no body
    
  }, []);

  return (
    <>
      <I18nextProvider i18n={i18n}>
          <ConfigurationProvider>
            <StepFormContextProvider>{children} </StepFormContextProvider>
          </ConfigurationProvider>
      </I18nextProvider>
    </>
  );
}
