import React from "react";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./smartphoneItem.module.scss";
import add from "../../../assets/icons/productsItem/add.svg";

interface SmartphoneItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  brand: string;
}
const SmartphoneItem: React.FC<SmartphoneItem> = ({
  id,
  title,
  price,
  thumbnail,
  category,
  brand,
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles["product-item"]}>
      <img className={styles.add} src={add} alt={add} />
      <img className={styles["product-img"]} src={thumbnail} alt={title} />
      <div className={styles["product-content"]}>
        <p className={styles["product-title"]}>
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </p>
        <h2 className={styles["product-price"]}>${price}</h2>
      </div>
      <Button
        onClick={() => navigate(`/products/${category}/${brand}/${id}`)}
        type="button"
        className={styles.btn}
        label="Buy Now"
      />
    </div>
  );
};

export default SmartphoneItem;
