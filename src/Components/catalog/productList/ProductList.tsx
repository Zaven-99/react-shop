import type { Products } from "../../../dal/types";
import ProductItem from "./productItem/ProductItem";

import styles from "./productList.module.scss";

interface ProductList {
  filteredProducts: Products[];
}

const ProductList = ({ filteredProducts }: ProductList) => {
  return (
    <div className={styles["product-list"]}>
      <ProductItem filteredProducts={filteredProducts} />
    </div>
  );
};

export default ProductList;
