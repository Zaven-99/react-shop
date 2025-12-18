import { useNavigate } from "react-router-dom";
import type { Products } from "../../../../dal/types";

import Button from "../../../ui/Button/Button";

import favorites from "../../../../assets/icons/productsItem/add.svg";

import styles from "./searchResult.module.scss";

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
          <p className={styles["product-title"]}>
            {item.title.slice(0, 10) + "..."}
          </p>
          <h2 className={styles["product-price"]}>${item.price}</h2>

          <div className={styles["btn-block"]}>
            <img className={styles.add} src={favorites} alt="favorites" />

            <Button
              onClick={() =>
                navigate(`/products/${item.category}/${item.brand}/${item.id}`)
              }
              type="button"
              className={styles.btn}
              label="Buy Now"
            />
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
