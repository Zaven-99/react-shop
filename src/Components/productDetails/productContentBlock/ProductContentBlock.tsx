import type { Products } from "../../../dal/types";
import Button from "../../ui/Button/Button";

import styles from "./productContentBlock.module.scss";

interface ProductContentBlock {
  productDetails: Products;
}
const ProductContentBlock = ({ productDetails }: ProductContentBlock) => {
  return (
    <div className={styles["product-details__content"]}>
      <h1 className={styles["product-details__title"]}>
        {productDetails.title}
      </h1>
      <p className={styles["product-details__description"]}>
        {productDetails.description}
      </p>

      <p className={styles["product-details__price"]}>
        Price: ${productDetails.price}
      </p>
      <div className={styles["btn-block"]}>
        <Button
          type="button"
          label="Add to Wishlist"
          className={styles["addToWishlist"]}
        />
        <Button
          type="button"
          label="Add to Card"
          className={styles["addToCard"]}
        />
      </div>
    </div>
  );
};

export default ProductContentBlock;
