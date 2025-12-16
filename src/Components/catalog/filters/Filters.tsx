import styles from "./filters.module.scss";
import Loading from "../../ui/loading/Loading";
import type { Category, FiltersVisibility } from "../../../dal/types";
import InputFilter from "./inputFilter.tsx/InputFilter";
import FilterByCategory from "./filterByCategory/FilterByCategory";

interface FiltersProps {
  loading: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  categories: Category[];
  filtersVisibility: FiltersVisibility;
  toggleFilter: (filterName: keyof FiltersVisibility) => void;
  toggleCategoryName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categoryValue: string[];
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
}: FiltersProps) => {
  if (loading) return <Loading />;

  return (
    <div className={styles["filter-block"]}>
      {/* Поисковая строка */}
      <InputFilter value={inputValue} setValue={setInputValue} />
      {/* Фильтр по категориям */}
      <FilterByCategory
        toggleFilter={toggleFilter}
        filtersVisibility={filtersVisibility}
        categories={categories}
        toggleCategoryName={toggleCategoryName}
        categoryValue={categoryValue}
      />
    </div>
  );
};

export default Filters;
