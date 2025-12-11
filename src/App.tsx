import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="products/:category/:brand/:id"
        element={<ProductDetailsPage />}
      />
      <Route path="catalog" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
