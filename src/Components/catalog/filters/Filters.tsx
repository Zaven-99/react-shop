import Loading from "../../ui/loading/Loading";
import {
  ErrorType,
  type Category,
  type FiltersVisibility,
} from "../../../dal/types";
import InputFilter from "./inputFilter.tsx/InputFilter";
import FilterByCategory from "./filterByCategory/FilterByCategory";
import Error from "../../ui/error/Error";

import styles from "./filters.module.scss";

interface FiltersProps {
  loading: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  categories: Category[];
  filtersVisibility: FiltersVisibility;
  toggleFilter: (filterName: keyof FiltersVisibility) => void;
  toggleCategoryName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categoryValue: string[];
  error: string | null;
}

const Filters = ({
  loading,
  inputValue,
  setInputValue,
  toggleFilter,
  filtersVisibility,
  categories,
  toggleCategoryName,
  categoryValue,
  error,
}: FiltersProps) => {
  if (loading) return <Loading />;

  return (
    <div className={styles["filter-block"]}>
      {/* Поисковая строка */}
      {error === ErrorType.INVALID_SEARCH ? (
        <Error label={error} />
      ) : (
        <InputFilter value={inputValue} setValue={setInputValue} />
      )}

      {/* Фильтр по категориям */}
      {error === ErrorType.INVALID_CATEGORY ? (
        <Error label={error} />
      ) : (
        <FilterByCategory
          toggleFilter={toggleFilter}
          filtersVisibility={filtersVisibility}
          categories={categories}
          toggleCategoryName={toggleCategoryName}
          categoryValue={categoryValue}
        />
      )}
    </div>
  );
};

export default Filters;
