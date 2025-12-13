import type { Products } from "./types";

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
      `Ошибка при загрузку ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

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
