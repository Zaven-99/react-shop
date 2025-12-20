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
  addToCartBtnStyle?: string;
  incrementDecrementStyle?: string;
}

const AddToCartControls = ({
  item,
  addToCartBtnStyle,
  incrementDecrementStyle,
}: AddToCartControls) => {
  const { count, cartItems, dispatch } = useProductItem();

  return (
    <div>
      {cartItems.some((cartItem) => cartItem.id === item.id) ? (
        <div className={styles["btn-block"]}>
          <Button
            label="-"
            type="button"
            className={
              !incrementDecrementStyle
                ? styles["decrement-btn"]
                : incrementDecrementStyle
            }
            onClick={() => dispatch(decrementQuantity(item.id))}
          />
          <span className={styles.quantity}>{count(item.id)}</span>
          <Button
            onClick={() => dispatch(incrementQuantity(item.id))}
            label="+"
            type="button"
            className={
              !incrementDecrementStyle
                ? styles["increment-btn"]
                : incrementDecrementStyle
            }
          />
        </div>
      ) : (
        <Button
          onClick={() => dispatch(addToCart(item))}
          type="button"
          className={
            !addToCartBtnStyle ? styles["add-to__cart"] : addToCartBtnStyle
          }
          label="Buy Now"
        />
      )}
    </div>
  );
};

export default AddToCartControls;
