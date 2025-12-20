import FavoriteItem from "./favoriteItem/FavoriteItem";

import styles from "./favorite.module.scss";
import OrderCount from "./orderCount/OrderCount";

const Favorite = () => {
  return (
    <div className={styles["favorite-container"]}>
      <div className={styles["favorite-inner"]}>
        <FavoriteItem />
        <OrderCount />
      </div>
    </div>
  );
};

export default Favorite;
