import type { Category, Products, SearchResponse } from "./types";

export const getSmartphone = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones?limit=20"
  );

  if (!response.ok) {
    throw Error(
      `Ошибка при загрузку ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

export const getMoreProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones?limit=4"
  );
  if (!response.ok) {
    throw Error(
      `Ошибка при загрузку ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

export const getDiscountProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones/?discountPercentage=10-50&sortBy=discountPercentage&order=desc&limit=5"
  );
  if (!response.ok) {
    throw Error(
      `Ошибка при загрузку ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

export const getTablets = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/tablets"
  );
  if (!response.ok) {
    throw Error(
      `Ошибка при загрузку ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};
export const getLaptops = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/laptops"
  );
  if (!response.ok) {
    throw Error(
      `Ошибка при загрузке ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

//! У API dummyjson нет endpoint для всех продуктов
export const getAllProducts = async (): Promise<Products[]> => {
  const categories = ["smartphones", "tablets", "laptops"];

  const results: Products[][] = [];

  for (const cat of categories) {
    const response = await fetch(
      `https://dummyjson.com/products/category/${cat}`
    );
    if (!response.ok) {
      throw new Error(`Ошибка при загрузке категории ${cat}`);
    }
    const data = await response.json();
    results.push(data.products);
  }

  return results.flat();
};

export const getProductById = async (id: number): Promise<Products> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw Error(
      `Ошибка при загрузку ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

export const getFilteredProduct = async (
  value: string
): Promise<Products[]> => {
  const ALLOWED_CATEGORIES = ["smartphones", "tablets", "laptops"];

  const response = await fetch(
    `https://dummyjson.com/products/search?q=${value}`
  );

  if (!response.ok) {
    throw new Error(
      `Ошибка при загрузке ${response.status} ${response.statusText}`
    );
  }

  const data: SearchResponse = await response.json();
  return data.products.filter((product) =>
    ALLOWED_CATEGORIES.includes(product.category)
  );
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch("https://dummyjson.com/products/categories");

  if (!response.ok) {
    throw new Error(
      `Ошибка при загрузке ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

export const getProductByCategoryName = async (categories: string[]) => {
  const allProducts: Products[] = [];

  for (const cat of categories) {
    const res = await fetch(`https://dummyjson.com/products/category/${cat}`);
    const data = await res.json();
    allProducts.push(...data.products);
  }

  return allProducts;
};
