import { useFilter } from "../../bll/useFilter";

import Loading from "../ui/loading/Loading";
import Error from "../ui/error/Error";
import ProductList from "./productList/ProductList";
import Filters from "./filters/Filters";

import styles from "./catalog.module.scss";

const Catalog = () => {
  const {
    filteredProducts,
    loading,
    setInputValue,
    inputValue,
    error,
    categories,
    toggleFilter,
    toggleCategoryName,
    filtersVisibility,
    categoryValue,
  } = useFilter(1000, true);
  if (loading) return <Loading />;
  if (error) return <Error label={error} />;

  return (
    <section>
      <div className={styles["catalog-container"]}>
        <div
          className={
            filteredProducts.length > 0
              ? styles["catalog-inner"]
              : `${styles["catalog-inner"]} ${styles.empty}`
          }
        >
          <Filters
            categories={categories}
            loading={loading}
            setInputValue={setInputValue}
            inputValue={inputValue}
            filtersVisibility={filtersVisibility}
            toggleFilter={toggleFilter}
            toggleCategoryName={toggleCategoryName}
            categoryValue={categoryValue}
          />
          {filteredProducts.length === 0 && <>No results</>}
          <ProductList filteredProducts={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
