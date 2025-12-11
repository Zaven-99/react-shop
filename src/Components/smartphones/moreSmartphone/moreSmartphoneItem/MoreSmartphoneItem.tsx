import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import styles from "./moreSmartphoneItem.module.scss";

interface MoreSmartphoneItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  brand: string;
}
const MoreSmartphoneItem: React.FC<MoreSmartphoneItem> = ({
  id,
  title,
  description,
  thumbnail,
  category,
  brand,
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles["more-product__item"]}>
      <img className={styles["more-product-img"]} src={thumbnail} alt={title} />
      <div className={styles["wrapper"]}>
        <h2 className={styles["more-product-title"]}>
          {title.length > 15 ? title.slice(0, 15) + "..." : title}
        </h2>
        <p className={styles["more-product-description"]}>
          {description.length > 30
            ? description.slice(0, 70) + "..."
            : description}
        </p>
        <Button
          onClick={() => navigate(`/products/${category}/${brand}/${id}`)}
          type="button"
          className={styles.btn}
          label="Shop Now"
        />
      </div>
    </div>
  );
};

export default MoreSmartphoneItem;
