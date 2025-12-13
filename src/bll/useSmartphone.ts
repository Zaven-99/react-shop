import { useEffect, useState } from "react";
import type { Products } from "../dal/types";
import { getSmartphone } from "../dal/api";

export function useSmartphone() {
  const [smartphone, setSmartphone] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSmartphone = async () => {
      setLoading(true);
      try {
        const smartphone = await getSmartphone();
        setSmartphone(smartphone.products);
      } catch {
        setError("Не удалось загрузить товары!");
      } finally {
        setLoading(false);
      }
    };
    fetchSmartphone();
  }, []);

  return { smartphone, loading, error };
}
