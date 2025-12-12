export function useReview() {
  function formatDate(dateTime: Date | string): string {
    const date = new Date(dateTime);
    return date.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function rating(rating: number): string {
    return "★★★★★".slice(0, rating) + "☆☆☆☆☆".slice(0, 5 - rating);
  }

  return { formatDate, rating };
}
