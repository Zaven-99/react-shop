export const getSmartphone = () => {
	return fetch("https://dummyjson.com/products/category/smartphones?limit=20").then(res => res.json())
}

export const getMoreProducts = () => {
	return fetch("https://dummyjson.com/products/category/smartphones?limit=4").then(res => res.json())
}

export const getDiscountProducts = () => {
	return fetch("https://dummyjson.com/products/category/smartphones/?discountPercentage=10-50&sortBy=discountPercentage&order=desc&limit=5").then(res => res.json())
}

export const getTablets = () => {
	return fetch("https://dummyjson.com/products/category/tablets").then(res => res.json())
}
export const getLaptops = () => {
	return fetch("https://dummyjson.com/products/category/laptops").then(res => res.json())
}

export const getAllProducts = async () => {
  const categories = ["smartphones", "tablets", "laptops"];
  
  return Promise.all(
    categories.map(cat => 
      fetch(`https://dummyjson.com/products/category/${cat}`)
        .then(res => res.json())
        .then(data => data.products)
    )
  ).then(results => results.flat());
};