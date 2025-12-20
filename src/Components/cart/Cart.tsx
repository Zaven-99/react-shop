import CartItem from "./cartItem/CartItem";

import styles from "./cart.module.scss";
import OrderSummary from "./orderSummary/OrderSummary";

const Cart = () => {
  return (
    <div className={styles["cart-container"]}>
      <div className={styles["cart-inner"]}>
        <CartItem />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
