import { useProductItem } from "../../../bll/useProductItem";
import type { Products } from "../../../dal/types";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../../store/cartSlice";
import Button from "../Button/Button";
import styles from "./addCartControl.module.scss";

interface AddToCartControls {
  item: Products;
  className?: string;
}

const AddToCartControls = ({ item, className }: AddToCartControls) => {
  const { count, cartItems, dispatch } = useProductItem();

  return (
    <div>
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
          className={!className ? styles["add-to__cart"] : className}
          label="Buy Now"
        />
      )}
    </div>
  );
};

export default AddToCartControls;
