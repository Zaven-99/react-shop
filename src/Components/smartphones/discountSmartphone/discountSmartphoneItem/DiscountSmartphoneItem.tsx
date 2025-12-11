import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import add from "../../../../assets/icons/productsItem/add.svg";
import styles from "./discountSmartphoneItem.module.scss";
interface DiscountSmartphoneItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  brand: string;
}
const DiscountSmartphoneItem: React.FC<DiscountSmartphoneItem> = ({
  id,
  title,
  thumbnail,
  price,
  category,
  brand,
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles["discount-product__item"]}>
      <img className={styles.add} src={add} alt={title} />
      <img
        className={styles["discount-product__image"]}
        src={thumbnail}
        alt={title}
      />
      <h2 className={styles["discount-product__title"]}>{title}</h2>
      <p className={styles["discount-product__price"]}>${price}</p>
      <Button
        onClick={() => navigate(`/products/${category}/${brand}/${id}`)}
        type="button"
        className={styles.btn}
        label="Buy Now"
      />
    </div>
  );
};

export default DiscountSmartphoneItem;
