import { useCart } from "../../../bll/useCart";

import Button from "../../ui/Button/Button";
import Input from "../../ui/input/Input";

import styles from "./orderSummary.module.scss";

const OrderSummary = () => {
  const { totalPrice, EstimatedTax, EstimatedShippingHandling, items } =
    useCart();
  return (
    <div className={styles["order-summary"]}>
      <h2 className={styles.title}>order-summary</h2>
      <p className={`${styles["promocode"]} ${styles["code-title"]}`}>
        Discount code / Promo code
      </p>
      <Input
        type="text"
        className={`${styles["promocode-input"]} ${styles["code-input"]}`}
        value=""
        onChange=""
      />
      <p className={`${styles["card-number"]} ${styles["code-title"]}`}>
        Your bonus card number
      </p>
      <Input
        type="text"
        className={`${styles["card-number__input"]} ${styles["code-input"]}`}
        value=""
        onChange=""
      />
      <div className={styles.subtotal}>
        <div className={styles["subtotal-item"]}>
          <p className={styles["subtotal-item__text"]}>Subtotal</p>
          <span className={styles["subtotal-item__price"]}>
            ${Math.round(totalPrice)}
          </span>
        </div>
        <div className={styles["subtotal-item"]}>
          <p className={styles["subtotal-item__text"]}>Estimated Tax</p>{" "}
          <span className={styles["subtotal-item__price"]}>
            ${EstimatedTax}
          </span>
        </div>
        <div className={styles["subtotal-item"]}>
          <p className={styles["subtotal-item__text"]}>
            Estimated shipping & Handling
          </p>
          <span className={styles["subtotal-item__price"]}>
            ${EstimatedShippingHandling}
          </span>
        </div>
        <div className={styles["subtotal-item"]}>
          <p className={styles["subtotal-item__text"]}>Total</p>
          <span className={styles["subtotal-item__price"]}>
            {items.length === 0
              ? "$0"
              : "$" +
                Math.floor(
                  totalPrice + EstimatedTax + EstimatedShippingHandling
                )}
          </span>
        </div>
      </div>
      <Button
        label="Checkout"
        className={styles["checkout-button"]}
        type="button"
      />
    </div>
  );
};

export default OrderSummary;
