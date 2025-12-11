import { useProductDetails } from "../../bll/useProductDetails";
import Button from "../ui/Button/Button";
import MoreDetails from "./moreDetails/MoreDetails";
import styles from "./productDetails.module.scss";
import Review from "./Review/Review";
const ProductDetails = () => {
  const { productDetails, setActiveImage, activeImage } = useProductDetails();
  if (!productDetails) return <>...loading</>;
  const mainImage = activeImage || productDetails.thumbnail;
  return (
    <section>
      <div className={styles["product-details__container"]}>
        <div className={styles["product-details__inner"]}>
          <div className={styles["product-details__image"]}>
            <div className={styles["images-container"]}>
              {productDetails.images.map((item, index) => (
                <div key={index}>
                  <img
                    onMouseEnter={() => setActiveImage(item)}
                    onMouseLeave={() => setActiveImage(null)}
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
                alt={productDetails.thumbnail}
              />
            </div>
          </div>
          <div className={styles["product-details__conent"]}>
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
        </div>
        <MoreDetails productDetails={productDetails} />
        <Review productDetails={productDetails} />
      </div>
    </section>
  );
};

export default ProductDetails;
