import type { Products } from "../../../dal/types";

import styles from "./productContentBlock.module.scss";

import AddToCartControls from "../../ui/addToCartControls/AddToCartControls";
import FavoriteToggle from "../../ui/favoriteToggle/FavoriteToggle";

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
        <FavoriteToggle item={productDetails} favoriteComponent={true} />
        <AddToCartControls
          className={styles["add-to__cart"]}
          item={productDetails}
        />
      </div>
    </div>
  );
};

export default ProductContentBlock;
