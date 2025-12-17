import type { Products } from "../../../dal/types";
import { useReview } from "../../../bll/useReview";

import avatar from "../../../assets/icons/review/user.png";

import styles from "./review.module.scss";

interface Review {
  productDetails: Products;
}
const Review = ({ productDetails }: Review) => {
  const { formatDate, rating } = useReview();
  return (
    <div className={styles["review-container"]}>
      <div className={styles["review-list"]}>
        {productDetails.reviews?.map((item, index) => (
          <div key={index} className={styles.review}>
            <div className={styles["review-avatar"]}>
              <img className={styles["avatar-img"]} src={avatar} alt="" />
            </div>
            <div className={styles["review-content"]}>
              <p className={styles["review-name"]}> {item.reviewerName}</p>
              <p className={styles["review-email"]}>{item.reviewerEmail}</p>
              <p className={styles["review-rating"]}> {rating(item.rating)}</p>
              <p className={styles["review-comment"]}>{item.comment}</p>
              <p className={styles["review-date"]}>{formatDate(item.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
