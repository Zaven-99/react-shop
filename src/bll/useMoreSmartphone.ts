import { useEffect, useState } from 'react';
import { getMoreProducts } from '../dal/api';
import type { Products } from '../dal/types';

export function useMoreSmartphone() {
	const [moreSmartphone, setMoreSmartphone] = useState<Products[]>([])


	useEffect(() => {
		getMoreProducts().
			then(data => setMoreSmartphone(data.products)).
			catch(err => console.log(err))
	},[])

	return {moreSmartphone}

}