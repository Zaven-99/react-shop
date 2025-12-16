import styles from "./header.module.scss";
import favorites from "../../assets/icons/favorites.svg";
import cart from "../../assets/icons/cart.svg";
import user from "../../assets/icons/user.svg";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/input/Input";
import logo from "../../assets/logo.svg";
import search from "../../assets/icons/search.svg";
import { useFilter } from "../../bll/useFilter";
import SearchResult from "./searchResut/SearchResult";

const Header = () => {
  const navigate = useNavigate();
  const { inputValue, setInputValue, filteredProducts, hasSearched } =
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
            <img className={styles["search-icon"]} src={search} alt="search" />
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`${styles.search} ${
                filteredProducts.length === 0
                  ? styles["no-result"]
                  : styles.open
              }`}
              type="text"
            />
            {hasSearched && filteredProducts.length === 0 && (
              <div className={styles["search-result"]}>
                <p>No results</p>
              </div>
            )}

            {filteredProducts.length > 0 && (
              <div className={styles["search-result"]}>
                <SearchResult filteredProducts={filteredProducts} />
              </div>
            )}
          </div>
          <ul className={styles.links}>
            <li className={styles["links-item"]}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles["links-item"]}>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li className={styles["links-item"]}>
              <Link to="#">Contact Us</Link>
            </li>
            <li className={styles["links-item"]}>
              <Link to="#">Blog</Link>
            </li>
          </ul>
          <div className={styles["action-icons"]}>
            <Link to="#">
              <img
                className={styles["action-icons__item"]}
                src={favorites}
                alt="favorites"
              />
            </Link>
            <Link to="#">
              <img
                className={styles["action-icons__item"]}
                src={cart}
                alt="cart"
              />
            </Link>
            <Link to="#">
              <img
                className={styles["action-icons__item"]}
                src={user}
                alt="user"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
