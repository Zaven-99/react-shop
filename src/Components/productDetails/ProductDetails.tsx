import { useProductDetails } from "../../bll/useProductDetails";

import ProductContentBlock from "./productContentBlock/ProductContentBlock";
import ProductImagesBlock from "./productImagesBlock/ProductImagesBlock";
import Error from "../ui/error/Error";
import Loading from "../ui/loading/Loading";
import MoreDetails from "./moreDetails/MoreDetails";
import Rating from "./rating/Rating";
import Review from "./Review/Review";

import styles from "./productDetails.module.scss";

const ProductDetails = () => {
  const {
    productDetails,
    activeImage,
    loading,
    error,
    handleMouseEnter,
    handleMouseLeave,
  } = useProductDetails();
  if (loading || !productDetails) return <Loading />;
  if (error) return <Error label={error} />;

  return (
    <section>
      <div className={styles["product-details__container"]}>
        <div className={styles["product-details__inner"]}>
          <ProductImagesBlock
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            productDetails={productDetails}
            activeImage={activeImage}
          />
          <ProductContentBlock productDetails={productDetails} />
        </div>
        <MoreDetails productDetails={productDetails} />
        <Rating productDetails={productDetails} />
        <Review productDetails={productDetails} />
      </div>
    </section>
  );
};

export default ProductDetails;
