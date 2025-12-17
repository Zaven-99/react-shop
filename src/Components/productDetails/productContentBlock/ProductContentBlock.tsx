import { useDispatch, useSelector } from "react-redux";
import type { Products } from "../../../dal/types";
import Button from "../../ui/Button/Button";

import styles from "./productContentBlock.module.scss";
import type { AppDispatch, RootState } from "../../../store/store";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../../store/cartSlice";

interface ProductContentBlock {
  productDetails: Products;
}
const ProductContentBlock = ({ productDetails }: ProductContentBlock) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((items: RootState) => items.cart.items);
  return (
    <div className={styles["product-details__content"]}>
      <h1 className={styles["product-details__title"]}>
        {productDetails.title}
      </h1>
      <p className={styles["product-details__description"]}>
        {productDetails.description}
      </p>

      <p className={styles["product-details__price"]}>
        Price: ${productDetails.price}
      </p>
      <div className={styles["btn-block"]}>
        <Button
          type="button"
          label="Add to Wishlist"
          className={styles["addToWishlist"]}
        />
        {cartItems.some((cartItem) => cartItem.id === productDetails.id) ? (
          <div className={styles["quantity-buttons"]}>
            <Button
              onClick={() => dispatch(incrementQuantity(productDetails.id))}
              label="+"
              type="button"
              className={styles["increment-btn"]}
            />
            <Button
              label="-"
              type="button"
              className={styles["decrement-btn"]}
              onClick={() => dispatch(decrementQuantity(productDetails.id))}
            />
          </div>
        ) : (
          <Button
            onClick={() => dispatch(addToCart(productDetails))}
            type="button"
            className={styles["add-to__cart"]}
            label="Buy Now"
          />
        )}
      </div>
    </div>
  );
};

export default ProductContentBlock;
