import { useFavorite } from "../../bll/useFavorite";

import FavoriteItem from "./favoriteItem/FavoriteItem";

import styles from "./favorite.module.scss";

const Favorite = () => {
  const { totalFavoritesProduct } = useFavorite();

  return (
    <div className={styles["favorite-container"]}>
      <h2>Favorites</h2>
      <div className={styles["favorite-inner"]}>
        <FavoriteItem />
        <div className={styles["order-summary"]}>
          <h2>quantity of products</h2>
          <h3>Total {Math.round(totalFavoritesProduct)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
