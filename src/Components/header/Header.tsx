import styles from "./header.module.scss";
import logo from "../../assets/logo.svg";
import favorites from "../../assets/icons/favorites.svg";
import cart from "../../assets/icons/cart.svg";
import user from "../../assets/icons/user.svg";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/input/Input";
const Header = () => {
  const navigate = useNavigate();
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
          <Input className={styles.search} type="text" />
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
