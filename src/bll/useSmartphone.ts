import { useEffect, useState  } from 'react'
import type { Products } from '../dal/types'
import { getSmartphone } from '../dal/api';

export function useSmartphone() {
	const [smartphone, setSmartphone] = useState<Products[]>([]);

	useEffect(() => {
		getSmartphone().
			then(data => setSmartphone(data.products)).
			catch(err => console.log(err))
	},[]);

	return {smartphone}
}