import React from "react";
import Button from "../../../ui/Button/Button";
import { useNavigate } from "react-router-dom";

import styles from "./smartphoneItem.module.scss";
import FavoriteToggle from "../../../ui/favoriteToggle/FavoriteToggle";

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
  const item = { id, title, price, thumbnail, category, brand };

  return (
    <div className={styles["product-item"]}>
      <FavoriteToggle item={item} favoriteComponent={false} />

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
