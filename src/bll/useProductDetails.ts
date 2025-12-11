import { useEffect, useState } from 'react';
 import { useParams } from 'react-router-dom';
import type { Products } from '../dal/types';

export function useProductDetails() {
	const { id } = useParams();
	const [productDetails, setProductDetails] = useState<Products | null>(null)
  	const [activeImage, setActiveImage] = useState<string | null>(null);

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`).
		then(data => data.json()).
		then(data => setProductDetails(data)).
		catch(err => console.log(err))
	},[id])

	return {productDetails,setActiveImage,activeImage}
}