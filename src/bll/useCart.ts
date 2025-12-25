import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useCart() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);
  const EstimatedTax = 50;
  const EstimatedShippingHandling = 29;
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  const isLogin = localStorage.getItem("currentUser");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return {
    totalPrice,
    dispatch,
    items,
    EstimatedTax,
    EstimatedShippingHandling,
    isLogin,
    navigate,
  };
}
