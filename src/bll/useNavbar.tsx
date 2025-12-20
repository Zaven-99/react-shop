import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function useNavbar() {
  const cartItems = useSelector((items: RootState) => items.cart.items);
  const favoriteItems = useSelector((items: RootState) => items.favorite.items);

  const totalQuantityCart = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );
  const totalQuantityFavorite = favoriteItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  return { totalQuantityCart, totalQuantityFavorite, cartItems, favoriteItems };
}
