import type { Products, Review } from "../dal/types";

export function useRating() {
  function averageRating(reviews: Review[]): number {
    if (!reviews || reviews.length === 0) return 0;

    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    const avg = sum / reviews.length;

    return Math.round(avg * 10) / 10;
  }

  function getRatingsCount(productDetails: Products) {
    return [5, 4, 3, 2, 1].map((ratingValue) => ({
      rating: ratingValue,
      count:
        productDetails.reviews?.filter((r) => r.rating === ratingValue)
          .length || 0,
    }));
  }

  function totalReviews(productDetails: Products) {
    return getRatingsCount(productDetails)
      .filter((item) => item.count > 0)
      .reduce((sum, item) => sum + item.count, 0);
  }

  function numberConvertToString(rating: number): string {
    switch (rating) {
      case 5:
        return "Excellent";
      case 4:
        return "Good";
      case 3:
        return "Average";
      case 2:
        return "Poor";
      case 1:
        return "Very bad";
      default:
        return "No rating";
    }
  }

  return {
    averageRating,
    getRatingsCount,
    numberConvertToString,
    totalReviews,
  };
}
