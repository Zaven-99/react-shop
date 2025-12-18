import React from "react";
import type { Products } from "../../../../dal/types";

import styles from "./productItem.module.scss";

import AddToCartControls from "../../../ui/addToCartControls/AddToCartControls";
import FavoriteToggle from "../../../ui/favoriteToggle/FavoriteToggle";

interface ProductList {
  filteredProducts: Products[];
}

const ProductItem = React.memo(({ filteredProducts }: ProductList) => {
  return (
    <>
      {filteredProducts.map((item) => (
        <div key={item.id} className={styles["product-item"]}>
          <FavoriteToggle item={item} favoriteComponent={false} />
          <img
            className={styles["product-img"]}
            src={item.thumbnail}
            alt={item.title}
          />
          <div className={styles["product-content"]}>
            <p className={styles["product-title"]}>
              {item.title.length > 40
                ? item.title.slice(0, 40) + "..."
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
