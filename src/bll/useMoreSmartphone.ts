import { useEffect, useState } from "react";
import { getMoreProducts } from "../dal/api";
import { ErrorType, type Products } from "../dal/types";

export function useMoreSmartphone() {
  const [moreSmartphone, setMoreSmartphone] = useState<Products[]>([]);
  const [error, setError] = useState<ErrorType>(ErrorType.NONE);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMoreProducts = async () => {
      setLoading(true);
      try {
        const moreSmartphone = await getMoreProducts();
        setMoreSmartphone(moreSmartphone.products);
      } catch {
        setError(ErrorType.INVALID_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchMoreProducts();
  }, []);

  return { moreSmartphone, error, loading };
}
