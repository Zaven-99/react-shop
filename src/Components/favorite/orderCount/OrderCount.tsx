import { useFavorite } from "../../../bll/useFavorite";

import styles from "./orderCount.module.scss";

const OrderCount = () => {
  const { totalFavoritesProduct } = useFavorite();

  return (
    <div className={styles["order-count"]}>
      <h2 className={styles["order-count__title"]}>Quantity of Products</h2>
      <div className={styles["order-count__value-container"]}>
        <p className={styles["order-count__label"]}>Count</p>
        <span className={styles["order-count__value"]}>
          {Math.floor(totalFavoritesProduct)}
        </span>
      </div>
    </div>
  );
};

export default OrderCount;
