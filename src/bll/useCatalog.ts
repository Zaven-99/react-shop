import { useEffect, useState } from "react";
import { getAllProducts } from "../dal/api";
import type { Products } from "../dal/types";

export function useCatalog() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const allProducts = await getAllProducts();
        setAllProducts(allProducts);
      } catch {
        setError("Ошибка при получении данных");
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  return { allProducts, error, loading };
}
