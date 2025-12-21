import { useEffect, useState } from "react";
import { ErrorType, type Products } from "../dal/types";
import { getSmartphone } from "../dal/api";

export function useSmartphone() {
  const [smartphone, setSmartphone] = useState<Products[]>([]);
  const [error, setError] = useState<ErrorType>(ErrorType.NONE);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSmartphone = async () => {
      setLoading(true);
      try {
        const smartphone = await getSmartphone();
        setSmartphone(smartphone.products);
      } catch {
        setError(ErrorType.INVALID_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };
    fetchSmartphone();
  }, []);

  return { smartphone, loading, error };
}
