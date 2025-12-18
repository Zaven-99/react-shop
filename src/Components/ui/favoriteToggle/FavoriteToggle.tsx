import { useProductItem } from "../../../bll/useProductItem";
import favorites from "../../../assets/icons/productsItem/add.svg";
import removeFavorites from "../../../assets/icons/productsItem/remove.svg";

import { toggleFavorites } from "../../../store/favoriteSlcie";
import styles from "./favoriteToggle.module.scss";
import type { Products } from "../../../dal/types";
import Button from "../Button/Button";

interface FavoriteToggle {
  item: Products;
  favoriteComponent: boolean;
}

const FavoriteToggle = ({ item, favoriteComponent }: FavoriteToggle) => {
  const { dispatch, checkIsFavorite } = useProductItem();

  return (
    <div>
      {favoriteComponent ? (
        <Button
          type="button"
          label={
            checkIsFavorite(item.id)
              ? "Remove from Favorites"
              : "Add to Wishlist"
          }
          className={styles.addToWishlist}
          onClick={() => dispatch(toggleFavorites(item))}
        />
      ) : (
        <img
          onClick={() => dispatch(toggleFavorites(item))}
          className={styles.favorite}
          src={checkIsFavorite(item.id) ? removeFavorites : favorites}
          alt="favorites"
        />
      )}
    </div>
  );
};

export default FavoriteToggle;
