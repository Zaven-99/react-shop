import { useEffect, useState } from 'react';
import { getDiscountProducts } from '../dal/api';
import type { Products } from '../dal/types';

export function useDiscountSmartphone(){
	const [discountSmartphone, setDiscountSmartphone] = useState<Products[]>([])

	useEffect(() => {
		getDiscountProducts().
			then(data => setDiscountSmartphone(data.products)).
				catch(err => console.log(err))
	},[])

	return {discountSmartphone}

}