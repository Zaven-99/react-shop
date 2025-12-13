import { useProductDetails } from "../../bll/useProductDetails";
import Button from "../ui/Button/Button";
import Error from "../ui/error/Error";
import Loading from "../ui/loading/Loading";
import MoreDetails from "./moreDetails/MoreDetails";
import styles from "./productDetails.module.scss";
import Rating from "./rating/Rating";
import Review from "./Review/Review";

const ProductDetails = () => {
  const {
    productDetails,
    activeImage,
    loading,
    error,
    handleMouseEnter,
    handleMouseLeave,
  } = useProductDetails();
  if (loading || !productDetails) {
    return <Loading />;
  }

  if (error) {
    return <Error label={error} />;
  }
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
        <Rating productDetails={productDetails} />
        <Review productDetails={productDetails} />
      </div>
    </section>
  );
};

export default ProductDetails;
