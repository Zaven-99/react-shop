import styles from "./filterByCategory.module.scss";
import type { Category, FiltersVisibility } from "../../../../dal/types";
import arrowDown from "../../../../assets/icons/arrow-down.svg";

interface FilterByCategory {
  categories: Category[];
  filtersVisibility: FiltersVisibility;
  toggleFilter: (filterName: keyof FiltersVisibility) => void;
  toggleCategoryName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categoryValue: string[];
}
const FilterByCategory = ({
  categories,
  filtersVisibility,
  toggleFilter,
  toggleCategoryName,
  categoryValue,
}: FilterByCategory) => {
  return (
    <div className={styles["filter-categories"]}>
      <div
        onClick={() => toggleFilter("category")}
        className={styles["filter-categories__header"]}
      >
        <h4 className="filter-categories__title">Search by category</h4>
        <img
          className={`${styles["filter-categories__icon__icon"]} ${
            filtersVisibility.category ? styles.active : ""
          }`}
          src={arrowDown}
          alt="Arrow down"
        />
      </div>

      <hr className={styles["filter-categories__divider"]} />

      <ul className={styles["filter-categories__list"]}>
        {filtersVisibility.category && (
          <>
            {categories.map((cat) => (
              <li className={styles["filter-categories__item"]} key={cat.slug}>
                <label className={styles["filter-categories__label"]}>
                  <input
                    type="checkbox"
                    value={cat.slug}
                    checked={categoryValue.includes(cat.slug)}
                    onChange={toggleCategoryName}
                    className={styles["filter-categories__checkbox"]}
                  />
                  <span className={styles["filter-categories__name"]}>
                    {cat.name}
                  </span>
                </label>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default FilterByCategory;
