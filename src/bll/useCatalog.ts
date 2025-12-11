import { useEffect, useState } from 'react';
import { getAllProducts } from '../dal/api';
import type { Products } from '../dal/types';

export function useCatalog() {
	const [allProducts,setAllProducts]= useState<Products[]>([])

	useEffect(() => {
		getAllProducts().
		then(data => setAllProducts(data)).
		catch(err => console.log(err))
	},[])

	return {allProducts}
}