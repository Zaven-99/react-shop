import search from "../../../../assets/icons/search.svg";
import Input from "../../../ui/input/Input";
import reset from "../../../../assets/icons/close.svg";

import styles from "./inputFilter.module.scss";

interface InputFilter {
  value: string;
  setValue: (value: string) => void;
}

const InputFilter = ({ value, setValue }: InputFilter) => {
  return (
    <div className={styles["filter-search"]}>
      <img
        className={styles["filter-search__icon"]}
        src={search}
        alt="search"
      />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={styles["filter-search__input"]}
        type="text"
      />
      <img
        onClick={() => setValue("")}
        className={styles["filter-reset__icon"]}
        src={reset}
        alt="reset"
      />
    </div>
  );
};

export default InputFilter;
