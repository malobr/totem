import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import GlobalRoutes from "./routes/globalRoutes.tsx";
import Providers from "./routes/providers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalRoutes />  
      </BrowserRouter>
    </Providers>
  </StrictMode>
);
