import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/produk" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
