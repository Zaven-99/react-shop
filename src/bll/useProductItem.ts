import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";

export function useProductItem() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((items: RootState) => items.cart.items);
  const favorites = useSelector((state: RootState) => state.favorite.items);

  function count(id: number) {
    const productInCart = cartItems.find((cartItem) => cartItem.id === id);
    return productInCart ? productInCart.quantity : 0;
  }

  function checkIsFavorite(product: number) {
    return favorites.some((item) => item.id === product);
  }

  return { count, dispatch, cartItems, checkIsFavorite };
}
