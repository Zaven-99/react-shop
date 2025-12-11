import type { Products } from "../../../dal/types";
// import styles from "./review.module.scss";

interface Review {
  productDetails: Products;
}
const Review = ({ productDetails }: Review) => {
  return (
    <div>
      {productDetails.reviews?.reviewerName}
      {productDetails.reviews?.reviewerEmail}
      {productDetails.reviews?.rating}
      {productDetails.reviews?.comment}
      {productDetails.reviews?.date}
    </div>
  );
};

export default Review;
