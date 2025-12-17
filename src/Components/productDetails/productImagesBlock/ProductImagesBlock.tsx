import type { Products } from "../../../dal/types";
import styles from "./productImagesBlock.module.scss";

interface ProductImagesBlock {
  handleMouseEnter: (img: string) => void;
  handleMouseLeave: () => void;
  productDetails: Products;
  activeImage: string | null;
}
const ProductImagesBlock = ({
  handleMouseEnter,
  handleMouseLeave,
  productDetails,
  activeImage,
}: ProductImagesBlock) => {
  const mainImage = activeImage || productDetails.thumbnail;

  return (
    <div className={styles["product-details__image"]}>
      <div className={styles["images-container"]}>
        {productDetails.images.map((item, index) => (
          <div key={index}>
            <img
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              className={styles["images"]}
              src={item}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles["thumbnail-container"]}>
        <img
          className={styles.thumbnail}
          src={mainImage}
          alt={"Product-thumbnail"}
        />
      </div>
    </div>
  );
};

export default ProductImagesBlock;
