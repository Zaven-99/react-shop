import { useEffect, useState } from "react";
import { getDiscountProducts } from "../dal/api";
import { ErrorType, type Products } from "../dal/types";

export function useDiscountSmartphone() {
  const [discountSmartphone, setDiscountSmartphone] = useState<Products[]>([]);
  const [error, setError] = useState<ErrorType>(ErrorType.NONE);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDiscountSmartphone = async () => {
      setLoading(true);
      try {
        const discountSmartphone = await getDiscountProducts();
        setDiscountSmartphone(discountSmartphone.products);
      } catch {
        setError(ErrorType.INVALID_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscountSmartphone();
  }, []);

  return { discountSmartphone, error, loading };
}
