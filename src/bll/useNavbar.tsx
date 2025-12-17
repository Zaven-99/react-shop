import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function useNavbar() {
  const cartItems = useSelector((items: RootState) => items.cart.items);
  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  return { totalQuantity };
}
