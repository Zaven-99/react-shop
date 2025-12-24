import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useState } from "react";

export function useNavbar() {
  const cartItems = useSelector((items: RootState) => items.cart.items);
  const favoriteItems = useSelector((items: RootState) => items.favorite.items);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const totalQuantityCart = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );
  const totalQuantityFavorite = favoriteItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const logOut = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return {
    totalQuantityCart,
    totalQuantityFavorite,
    cartItems,
    favoriteItems,
    currentUser,
    setOpenUserMenu,
    openUserMenu,
    logOut,
  };
}
