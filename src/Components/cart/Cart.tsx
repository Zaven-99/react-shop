import styles from "./cart.module.scss";
import Button from "../ui/Button/Button";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/cartSlice";
import reset from "../../assets/icons/close.svg";
import { useCart } from "../../bll/useCart";
const Cart = () => {
  const { dispatch, totalPrice, items } = useCart();
  return (
    <div className={styles["cart-container"]}>
      <h2>Shopping cart</h2>
      <div className={styles["cart-inner"]}>
        <div className={styles["cart-items__block"]}>
          {items.length > 0 ? (
            <ul className={styles["cart-items"]}>
              {items.map((item) => (
                <li key={item.id} className={styles["cart-items__inner"]}>
                  <div className={styles.wrapper}>
                    <div className={styles.thumbnail}>
                      <img src={item.thumbnail} alt="thumbnail" />
                    </div>
                    <div className={styles.title}>
                      {item.title.slice(0, 20)}
                    </div>
                    <div className={styles["quantity-block"]}>
                      <Button
                        label="-"
                        type="button"
                        className={styles["decrement-btn"]}
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      />
                      <div className={styles.quantity}>{item.quantity}</div>
                      <Button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        label="+"
                        type="button"
                        className={styles["increment-btn"]}
                      />
                    </div>
                    <p className={styles.price}>${item.price}</p>
                    <img
                      className={styles["delete-product"]}
                      onClick={() => dispatch(removeFromCart(item.id))}
                      src={reset}
                      alt="delete"
                    />
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          ) : (
            <>Пусто</>
          )}
        </div>
        <div className={styles["order-summary"]}>
          <h2>order-summary</h2>
          <h3>Total ${Math.round(totalPrice)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
