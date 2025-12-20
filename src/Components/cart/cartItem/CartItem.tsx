import { removeFromCart } from "../../../store/cartSlice";
import { useCart } from "../../../bll/useCart";

import AddToCartControls from "../../ui/addToCartControls/AddToCartControls";
import reset from "../../../assets/icons/close.svg";

import styles from "./cartItem.module.scss";

const CartItem = () => {
  const { dispatch, items } = useCart();

  return (
    <div className={styles["cart-items__block"]}>
      <h2>Shopping cart</h2>
      {items.length > 0 ? (
        <ul className={styles["cart-items"]}>
          {items.map((item) => (
            <li key={item.id} className={styles["cart-items__inner"]}>
              <div className={styles.wrapper}>
                <div className={styles.thumbnail}>
                  <img src={item.thumbnail} alt="thumbnail" />
                </div>
                <div className={styles.title}>{item.title.slice(0, 20)}</div>
                <p className={styles.price}>${item.price}</p>
                <AddToCartControls item={item} />
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
  );
};

export default CartItem;
