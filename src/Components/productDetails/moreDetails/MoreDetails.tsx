import type { Products } from "../../../dal/types";

import styles from "./moreDetails.module.scss";

interface MoreDetails {
  productDetails: Products;
}
const MoreDetails = ({ productDetails }: MoreDetails) => {
  return (
    <div className={styles["more-details__container"]}>
      <div className={styles["more-details__inner"]}>
        <h2>Details</h2>
        <p className={styles["more-details__description"]}>
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </p>
        {productDetails.dimensions && (
          <div className={`${styles.dimensions}`}>
            <h3 className={styles["dimensions-title"]}>Dimensions</h3>
            <hr />
            <div className={styles["more-details-item"]}>
              <div>Width: </div>
              <div>{productDetails.dimensions.width} cm</div>
            </div>
            <div className={styles["more-details-item"]}>
              <div>Height:</div>{" "}
              <div>{productDetails.dimensions.height} cm</div>
            </div>
            <div className={styles["more-details-item"]}>
              <div>Depth:</div> <div>{productDetails.dimensions.depth} cm</div>
            </div>
          </div>
        )}
        <hr />
        {productDetails.discountPercentage && (
          <div className={`${styles.discount} ${styles["more-details-item"]}`}>
            <div>Discount:</div>
            <div>{productDetails.discountPercentage}%</div>
          </div>
        )}
        <hr />
        {productDetails.minimumOrderQuantity && (
          <div
            className={`${styles["min-order"]} ${styles["more-details-item"]}`}
          >
            <div>Minimum order: </div>
            <div>{productDetails.minimumOrderQuantity}</div>
          </div>
        )}
        <hr />
        {productDetails.shippingInformation && (
          <div
            className={`${styles["shipping-info"]} ${styles["more-details-item"]}`}
          >
            <div>Info: </div>
            <div>{productDetails.shippingInformation}</div>
          </div>
        )}
        <hr />
        {productDetails.returnPolicy && (
          <div
            className={`${styles["return-policy"]} ${styles["more-details-item"]}`}
          >
            <div>return policy:</div>
            <div> {productDetails.returnPolicy}</div>
          </div>
        )}
        <hr />
        {productDetails.stock && (
          <div className={`${styles.stock} ${styles["more-details-item"]}`}>
            <div>Stock: </div>
            <div>{productDetails.stock}</div>
          </div>
        )}
        <hr />
        {productDetails.warrantyInformation && (
          <div
            className={`${styles["warranty-information"]} ${styles["more-details-item"]}`}
          >
            <div>Warranty: </div>
            <div>{productDetails.warrantyInformation}</div>
          </div>
        )}
        <hr />
        {productDetails.weight && (
          <div className={`${styles.weight} ${styles["more-details-item"]}`}>
            <div>weight:</div>
            <div> {productDetails.weight}</div>
          </div>
        )}
        <hr />
        {productDetails.availabilityStatus && (
          <div className={`${styles.status} ${styles["more-details-item"]}`}>
            <div>Status:</div>
            <div>{productDetails.availabilityStatus}</div>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default MoreDetails;
