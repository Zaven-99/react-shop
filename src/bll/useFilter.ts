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

  // загрузка товаров при изменении выбранных категорий
  useEffect(() => {
    if (categoryValue.length === 0) {
      if (loadAllOnEmpty) {
        // загружаем все товары только если loadAllOnEmpty = true
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
        // если loadAllOnEmpty = false — просто очищаем состояния
        setAllCatProducts([]);
        setFilteredProducts([]);
      }
      return;
    }

    // если есть выбранные категории — загружаем товары по категориям
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

  // загрузка списка категорий один раз
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

  // debounce‑поиск
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const text = inputValue.trim().toLowerCase();

      if (!text) {
        // если текст пуст — просто показать текущий массив
        setFilteredProducts(allCatProducts);
        return;
      }

      if (categoryValue.length > 0) {
        // если есть категории — фильтруем их
        const searched = allCatProducts.filter((p) =>
          p.title.toLowerCase().includes(text)
        );
        setFilteredProducts(searched);
      } else {
        // если категорий нет — поиск по API
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
