import { useNavigate } from "react-router-dom";

import { useFilter } from "../../../bll/useFilter";
import Input from "../../ui/input/Input";
import SearchResult from "./searchResut/SearchResult";
import NavBar from "./navBar/NavBar";

import reset from "../../../assets/icons/close.svg";
import logo from "../../../assets/logo.svg";
import search from "../../../assets/icons/search.svg";

import styles from "./header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const { inputValue, setInputValue, filteredProducts, hasSearched, loading } =
    useFilter(1000, false);

  return (
    <header>
      <div className={styles["header-container"]}>
        <div className={styles["header-inner"]}>
          <img
            onClick={() => navigate("/")}
            className={styles.logo}
            src={logo}
            alt="logo"
          />
          <div className={styles["search-block"]}>
            <div className={styles["input"]}>
              <img
                className={styles["search-icon"]}
                src={search}
                alt="search"
              />
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={`${styles.search} ${
                  inputValue.trim() ? styles.open : ""
                }`}
                type="text"
                placeholder="Search"
              />
              <img
                onClick={() => setInputValue("")}
                className={styles["filter-reset__icon"]}
                src={reset}
                alt="reset"
              />
            </div>

            {hasSearched && !loading && filteredProducts.length === 0 ? (
              <div
                className={`${styles["search-result"]} ${styles["popup-result"]}`}
              >
                <p className={styles["no-result"]}>No results</p>
              </div>
            ) : hasSearched && loading ? (
              <div
                className={`${styles["search-result"]} ${styles["popup-result"]}`}
              >
                <p className={styles["loading"]}>loading...</p>
              </div>
            ) : (
              ""
            )}

            {filteredProducts.length > 0 && (
              <div className={styles["search-result"]}>
                <SearchResult filteredProducts={filteredProducts} />
              </div>
            )}
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
