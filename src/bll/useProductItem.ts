import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";

export function useProductItem() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((items: RootState) => items.cart.items);
  function count(id: number) {
    const productInCart = cartItems.find((cartItem) => cartItem.id === id);
    return productInCart ? productInCart.quantity : 0;
  }

  return { count, dispatch, cartItems };
}
