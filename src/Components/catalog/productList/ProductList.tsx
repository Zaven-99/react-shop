import type { Products } from "../../../dal/types";
import ProductItem from "./productItem/ProductItem";

import styles from "./productList.module.scss";

interface ProductList {
  filteredProducts: Products[];
  loading: boolean;
}

const ProductList = ({ filteredProducts, loading }: ProductList) => {
  return (
    <div className={styles["product-list"]}>
      <ProductItem loading={loading} filteredProducts={filteredProducts} />
    </div>
  );
};

export default ProductList;
