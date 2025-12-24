import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";

export function useFavorite() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.favorite.items);

  const totalFavoritesProduct = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return { totalFavoritesProduct, dispatch, items };
}
