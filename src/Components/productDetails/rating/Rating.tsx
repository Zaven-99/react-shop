import { useRating } from "../../../bll/useRating";
import { useReview } from "../../../bll/useReview";
import type { Products } from "../../../dal/types";
import styles from "./rating.module.scss";
interface Rating {
  productDetails: Products;
}
const Rating = ({ productDetails }: Rating) => {
  const {
    averageRating,
    getRatingsCount,
    numberConvertToString,
    totalReviews,
  } = useRating();
  const { rating } = useReview();

  return (
    <div className={styles["rating-container"]}>
      <div className={styles["rating-inner"]}>
        <div className={styles["rating-summary"]}>
          <div className={styles["rating-value"]}>
            {averageRating(productDetails.reviews || [])}
            <p className={styles["rating-length"]}>
              of {totalReviews(productDetails)}
              {totalReviews(productDetails) === 1 ? " view" : " views"}
            </p>
            <p className={styles["average-rating"]}>
              {rating(averageRating(productDetails.reviews || []))}
            </p>
          </div>
        </div>
        <div className={styles["rating-details"]}>
          {getRatingsCount(productDetails).map((item) => (
            <div className={styles["rating-details__item"]} key={item.rating}>
              <span className={styles["rating"]}>
                {numberConvertToString(item.rating)}
              </span>
              <div className={styles["status-bar"]}>
                <div className={styles["status-bar"]}>
                  <div
                    className={styles["status-bar__fill"]}
                    style={{
                      width: `${item.count}%`,
                    }}
                  ></div>
                </div>
              </div>
              <span className={styles["rating-count"]}>{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
