import React from "react";
import type { Products } from "../../../../dal/types";
// import { useDispatch } from "react-redux";

import Button from "../../../ui/Button/Button";

import styles from "./productItem.module.scss";

import favorites from "../../../../assets/icons/productsItem/add.svg";
// import type { AppDispatch } from "../../../../store/store";
// import { addToCart } from "../../../../store/cartSlice";

interface ProductList {
  filteredProducts: Products[];
}

const ProductItem = React.memo(({ filteredProducts }: ProductList) => {
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {filteredProducts.map((item) => (
        <div key={item.id} className={styles["product-item"]}>
          <img className={styles.add} src={favorites} alt="favorites" />
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
          <Button
            // onClick={() => dispatch(addToCart(item))}
            type="button"
            className={styles.btn}
            label="Buy Now"
          />
        </div>
      ))}
    </>
  );
});

export default ProductItem;
