import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";

export function useFavorite() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.favorite.items);

  const totalFavoritesProduct = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return { totalFavoritesProduct, dispatch, items };
}
