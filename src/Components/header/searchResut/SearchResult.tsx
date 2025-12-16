import styles from "./searchResult.module.scss";
import type { Products } from "../../../dal/types";
import Button from "../../ui/Button/Button";
import add from "../../../assets/icons/productsItem/add.svg";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  filteredProducts: Products[];
}
const SearchResult = ({ filteredProducts }: SearchResult) => {
  const navigate = useNavigate();

  return (
    <div>
      {filteredProducts.slice(0, 5).map((item) => (
        <div key={item.id} className={styles["product-item"]}>
          <img
            className={styles["product-img"]}
            src={item.thumbnail}
            alt={item.title}
          />

          <h2 className={styles["product-price"]}>${item.price}</h2>

          <div className={styles["btn-block"]}>
            <img className={styles.add} src={add} alt={add} />
            <Button type="button" className={styles.btn} label="Buy Now" />
          </div>
        </div>
      ))}
      <Button
        onClick={() => navigate(`/catalog`)}
        type="button"
        className={styles.more}
        label="More"
      />
    </div>
  );
};

export default SearchResult;
