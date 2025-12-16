import React from "react";
import Button from "../../../ui/Button/Button";
import add from "../../../../assets/icons/productsItem/add.svg";
import styles from "./productItem.module.scss";
import type { Products } from "../../../../dal/types";
interface ProductList {
  filteredProducts: Products[];
}

const ProductItem = React.memo(({ filteredProducts }: ProductList) => {
  return (
    <>
      {filteredProducts.map((item) => (
        <div key={item.id} className={styles["product-item"]}>
          <img className={styles.add} src={add} alt={add} />
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
          <Button type="button" className={styles.btn} label="Buy Now" />
        </div>
      ))}
    </>
  );
});

export default ProductItem;
