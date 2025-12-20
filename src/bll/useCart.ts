import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";

export function useCart() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);
  const EstimatedTax = 50;
  const EstimatedShippingHandling = 29;
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return {
    totalPrice,
    dispatch,
    items,
    EstimatedTax,
    EstimatedShippingHandling,
  };
}
