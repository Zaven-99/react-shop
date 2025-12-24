import { useEffect, useState, useRef } from "react";
import {
  getAllProducts,
  getCategories,
  getFilteredProduct,
  getProductByCategoryName,
} from "../dal/api";
import { ErrorType, type Category, type Products } from "../dal/types";

export function useFilter(delay = 1000, loadAllOnEmpty = false) {
  const [allCatProducts, setAllCatProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [categoryValue, setCategoryValue] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(ErrorType.NONE);
  const [hasSearched, setHasSearched] = useState(false);
  const [filtersVisibility, setFiltersVisibility] = useState({
    category: false,
    price: false,
    brand: false,
  });

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleFilter = (filterName: keyof typeof filtersVisibility) => {
    setFiltersVisibility((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const toggleCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setHasSearched(true);
    setCategoryValue((prev) => {
      if (checked) return [...prev, value];
      return prev.filter((v) => v !== value);
    });
  };

  useEffect(() => {
    if (inputValue.trim()) {
      setHasSearched(true);
    }
    if (inputValue.length === 0) {
      setHasSearched(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (categoryValue.length === 0) {
      if (loadAllOnEmpty) {
        (async () => {
          setLoading(true);
          try {
            const allProducts = await getAllProducts();
            setAllCatProducts(allProducts);
            setFilteredProducts(allProducts);
          } catch {
            setError(ErrorType.INVALID_PRODUCTS);
          } finally {
            setLoading(false);
          }
        })();
      } else {
        setAllCatProducts([]);
        setFilteredProducts([]);
      }
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const products = await getProductByCategoryName(categoryValue);
        setAllCatProducts(products);
        setFilteredProducts(products);
      } catch {
        setError(ErrorType.INVALID_PRODUCTS_BY_CATEGORY);
      } finally {
        setLoading(false);
      }
    })();
  }, [categoryValue, loadAllOnEmpty]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const allCategories = await getCategories();
        const filteredCategories = allCategories.filter((cat) =>
          ["laptops", "smartphones", "tablets"].includes(cat.slug)
        );
        setCategories(filteredCategories);
      } catch {
        setError(ErrorType.INVALID_CATEGORY);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const text = inputValue.trim().toLowerCase();

      if (!text) {
        setFilteredProducts(allCatProducts);
        return;
      }

      if (categoryValue.length > 0) {
        const searched = allCatProducts.filter((p) =>
          p.title.toLowerCase().includes(text)
        );
        setFilteredProducts(searched);
      } else {
        (async () => {
          setLoading(true);
          try {
            const products = await getFilteredProduct(text);
            setFilteredProducts(products);
          } catch {
            setError(ErrorType.INVALID_SEARCH);
          } finally {
            setLoading(false);
          }
        })();
        return;
      }
    }, delay);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [inputValue, categoryValue, allCatProducts, delay]);

  return {
    filteredProducts,
    loading,
    inputValue,
    setInputValue,
    error,
    categories,
    toggleFilter,
    filtersVisibility,
    toggleCategoryName,
    categoryValue,
    hasSearched,
  };
}
