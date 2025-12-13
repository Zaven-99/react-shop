import { useEffect, useState } from "react";
import { getDiscountProducts } from "../dal/api";
import type { Products } from "../dal/types";

export function useDiscountSmartphone() {
  const [discountSmartphone, setDiscountSmartphone] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDiscountSmartphone = async () => {
      setLoading(true);
      try {
        const discountSmartphone = await getDiscountProducts();
        setDiscountSmartphone(discountSmartphone.products);
      } catch {
        setError("Не удалось загрузить данные");
      } finally {
        setLoading(false);
      }
    };

    fetchDiscountSmartphone();
  }, []);

  return { discountSmartphone, error, loading };
}
