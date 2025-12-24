import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ErrorType, type Products } from "../dal/types";
import { getProductById } from "../dal/api";

export function useProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [productDetails, setProductDetails] = useState<Products | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(ErrorType.NONE);

  const handleMouseEnter = useCallback(
    (img: string) => setActiveImage(img),
    []
  );
  const handleMouseLeave = useCallback(() => setActiveImage(null), []);

  useEffect(() => {
    if (!id) return;

    const productId = Number(id);
    if (Number.isNaN(productId)) return;

    const fetchProductById = async () => {
      setLoading(true);
      try {
        const productById = await getProductById(productId);
        setProductDetails(productById);
      } catch {
        setError(ErrorType.INVALID_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  return {
    setActiveImage,
    handleMouseEnter,
    handleMouseLeave,
    productDetails,
    activeImage,
    loading,
    error,
  };
}
