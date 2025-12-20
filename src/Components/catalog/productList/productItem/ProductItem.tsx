import React from "react";
import type { Products } from "../../../../dal/types";

import styles from "./productItem.module.scss";

import AddToCartControls from "../../../ui/addToCartControls/AddToCartControls";
import FavoriteToggle from "../../../ui/favoriteToggle/FavoriteToggle";

import Loading from "../../../../assets/icons/loading/loading.svg";

interface ProductList {
  filteredProducts: Products[];
  loading: boolean;
}

const ProductItem = React.memo(({ filteredProducts, loading }: ProductList) => {
  return (
    <>
      {filteredProducts.map((item) => (
        <div key={item.id} className={styles["product-item"]}>
          <FavoriteToggle item={item} favoriteComponent={false} />
          <img
            className={styles["product-img"]}
            src={loading ? Loading : item.thumbnail || Loading}
            alt={item.title}
          />
          <div className={styles["product-content"]}>
            <p className={styles["product-title"]}>
              {item.title.length > 20
                ? item.title.slice(0, 20) + "..."
                : item.title}
            </p>
            <h2 className={styles["product-price"]}>${item.price}</h2>
          </div>

          <AddToCartControls item={item} />
        </div>
      ))}
    </>
  );
});

export default ProductItem;
