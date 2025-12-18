import { useCart } from "../../bll/useCart";

import CartItem from "./cartItem/CartItem";

import styles from "./cart.module.scss";

const Cart = () => {
  const { totalPrice } = useCart();
  return (
    <div className={styles["cart-container"]}>
      <h2>Shopping cart</h2>
      <div className={styles["cart-inner"]}>
        <CartItem />
        <div className={styles["order-summary"]}>
          <h2>order-summary</h2>
          <h3>Total ${Math.round(totalPrice)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
