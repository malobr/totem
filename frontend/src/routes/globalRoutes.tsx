import { Routes, Route } from "react-router";

import MultiStepForm from "@/features/multiStepForm/pages/MultiStepFormPage";
import GlobalLayout from "./layout/GlobalLayout";
import Middlewares from "@/middlewares";
import ProductPage from "@/pages/ProductPage";
import EcommercePage from "@/pages/EcommercePage";
import DonationPage from "@/pages/DonationPage";
import FastFoodPage from "@/pages/FastFoodPage";
import FormPage from "@/features/multiStepForm/pages/FormContent";
import HomePage from "@/pages/HomePage";
import VirtualTryOnPage from "@/pages/VirtualTryOn";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route element={<Middlewares />}>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:ref/form" element={<FormPage />} />
          <Route path="/:ref/t" element={<MultiStepForm />} />
          <Route path="/:ref/catalog" element={<ProductPage />}></Route>
          <Route path="/:ref/tryon" element={<VirtualTryOnPage />}></Route>
          <Route path="/:ref/ecommerce" element={<EcommercePage />} />
          <Route path="/:ref/donation" element={<DonationPage />} />
          <Route path="/:ref/fastfood" element={<FastFoodPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
