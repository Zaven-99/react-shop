import { useFavorite } from "../../../bll/useFavorite";
import { removeFromFavorite } from "../../../store/favoriteSlcie";
import AddToCartControls from "../../ui/addToCartControls/AddToCartControls";

import reset from "../../../assets/icons/close.svg";

import styles from "./favoriteItem.module.scss";
const FavoriteItem = () => {
  const { dispatch, items } = useFavorite();

  return (
    <div className={styles["favorite-items__block"]}>
      {items.length > 0 ? (
        <ul className={styles["favorite-items"]}>
          {items.map((item) => (
            <li key={item.id} className={styles["favorite-items__inner"]}>
              <div className={styles.wrapper}>
                <div className={styles.thumbnail}>
                  <img src={item.thumbnail} alt="thumbnail" />
                </div>
                <div className={styles.title}>{item.title.slice(0, 20)}</div>
                <p className={styles.price}>${item.price}</p>
                <AddToCartControls item={item} />
                <img
                  className={styles["delete-product"]}
                  onClick={() => dispatch(removeFromFavorite(item.id))}
                  src={reset}
                  alt="delete"
                />
              </div>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <>Пусто</>
      )}
    </div>
  );
};

export default FavoriteItem;
