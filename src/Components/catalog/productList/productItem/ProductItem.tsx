import React from "react";
import type { Products } from "../../../../dal/types";

import Button from "../../../ui/Button/Button";

import styles from "./productItem.module.scss";

import favorites from "../../../../assets/icons/productsItem/add.svg";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../../../store/cartSlice";
import { useProductItem } from "../../../../bll/useProductItem";

interface ProductList {
  filteredProducts: Products[];
}

const ProductItem = React.memo(({ filteredProducts }: ProductList) => {
  const { count, dispatch, cartItems } = useProductItem();
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
          {cartItems.some((cartItem) => cartItem.id === item.id) ? (
            <div className={styles["btn-block"]}>
              <Button
                label="-"
                type="button"
                className={styles["decrement-btn"]}
                onClick={() => dispatch(decrementQuantity(item.id))}
              />
              <span className={styles.quantity}>{count(item.id)}</span>
              <Button
                onClick={() => dispatch(incrementQuantity(item.id))}
                label="+"
                type="button"
                className={styles["increment-btn"]}
              />
            </div>
          ) : (
            <Button
              onClick={() => dispatch(addToCart(item))}
              type="button"
              className={styles["add-to__cart"]}
              label="Buy Now"
            />
          )}
        </div>
      ))}
    </>
  );
});

export default ProductItem;
