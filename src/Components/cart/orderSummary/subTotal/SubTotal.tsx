import { useLocation, type NavigateFunction } from "react-router-dom";
import type { Products } from "../../../../dal/types";

import Button from "../../../ui/Button/Button";

import styles from "./subTotal.module.scss";

interface SubTotal {
  totalPrice: number;
  EstimatedTax: number;
  EstimatedShippingHandling: number;
  items: Products[];
  isLogin: string | null;
  navigate: NavigateFunction;
}

const SubTotal = ({
  totalPrice,
  EstimatedTax,
  EstimatedShippingHandling,
  items,
  isLogin,
  navigate,
}: SubTotal) => {
  const { state } = useLocation();
  const { id } = state || {};

  return (
    <div className={styles.subtotal}>
      <div className={styles["subtotal-item"]}>
        <p className={styles["subtotal-item__text"]}>Subtotal</p>
        <span className={styles["subtotal-item__price"]}>
          ${Math.round(totalPrice)}
        </span>
      </div>
      <div className={styles["subtotal-item"]}>
        <p className={styles["subtotal-item__text"]}>Estimated Tax</p>{" "}
        <span className={styles["subtotal-item__price"]}>${EstimatedTax}</span>
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
              Math.round(totalPrice + EstimatedTax + EstimatedShippingHandling)}
        </span>
      </div>
      {isLogin ? (
        <Button
          label="Checkout"
          className={styles["checkout-button"]}
          type="button"
          onClick={() =>
            navigate("/checkout", {
              state: { id: id, items },
            })
          }
        />
      ) : (
        <Button
          label="To signin"
          className={styles["signin-button"]}
          type="button"
          onClick={() => navigate("/auth")}
        />
      )}
    </div>
  );
};

export default SubTotal;
