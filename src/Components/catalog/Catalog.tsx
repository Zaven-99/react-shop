import { useFilter } from "../../bll/useFilter";
import { ErrorType } from "../../dal/types";
import Error from "../ui/error/Error";

import Loading from "../ui/loading/Loading";
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
            error={error}
          />
          {!error && !loading && filteredProducts.length === 0 && (
            <>No results</>
          )}
          {error === ErrorType.INVALID_PRODUCTS ? (
            <Error label={error} />
          ) : (
            <ProductList
              loading={loading}
              filteredProducts={filteredProducts}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
