import { useCart } from "../../../bll/useCart";

import Input from "../../ui/input/Input";
import SubTotal from "./subTotal/SubTotal";

import styles from "./orderSummary.module.scss";

const OrderSummary = () => {
  const {
    totalPrice,
    EstimatedTax,
    EstimatedShippingHandling,
    items,
    isLogin,
    navigate,
  } = useCart();

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
        onChange="#"
        placeholder="promocode"
      />
      <p className={`${styles["card-number"]} ${styles["code-title"]}`}>
        Your bonus card number
      </p>
      <Input
        type="number"
        className={`${styles["card-number__input"]} ${styles["code-input"]}`}
        value=""
        onChange="#"
        placeholder="Card number"
      />
      <SubTotal
        totalPrice={totalPrice}
        EstimatedTax={EstimatedTax}
        EstimatedShippingHandling={EstimatedShippingHandling}
        items={items}
        isLogin={isLogin}
        navigate={navigate}
      />
    </div>
  );
};

export default OrderSummary;
