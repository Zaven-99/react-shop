import { Link } from "react-router-dom";
import { useNavbar } from "../../../../bll/useNavbar";

import favorites from "../../../../assets/icons/favorites.svg";
import cart from "../../../../assets/icons/cart.svg";
import user from "../../../../assets/icons/user.svg";

import styles from "./navBar.module.scss";
import Button from "../../../ui/Button/Button";

const NavBar = () => {
  const {
    totalQuantityCart,
    totalQuantityFavorite,
    cartItems,
    favoriteItems,
    currentUser,
    setOpenUserMenu,
    openUserMenu,
    logOut,
  } = useNavbar();

  return (
    <div className={styles["navBar-container"]}>
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
        <div className={styles.favorite}>
          <Link to="/favorite">
            <img
              className={styles["action-icons__item"]}
              src={favorites}
              alt="favorites"
            />
          </Link>
          {favoriteItems.length > 0 ? (
            <span className={styles["total-quantity__favorite"]}>
              {totalQuantityFavorite}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className={styles.cart}>
          <Link to="/cart">
            <img
              className={styles["action-icons__item"]}
              src={cart}
              alt="cart"
            />
          </Link>
          {cartItems.length > 0 ? (
            <span className={styles["total-quantity__cart"]}>
              {totalQuantityCart}
            </span>
          ) : (
            ""
          )}
        </div>
        {currentUser ? (
          <div className={styles["userName-block"]}>
            <span
              onMouseEnter={() => setOpenUserMenu(true)}
              onMouseLeave={() => setOpenUserMenu(false)}
              className={openUserMenu ? styles.open : styles.userName}
            >
              {currentUser.username}
            </span>
            {openUserMenu && (
              <div
                onMouseEnter={() => setOpenUserMenu(true)}
                onMouseLeave={() => setOpenUserMenu(false)}
                className={styles["logout-modal"]}
              >
                <Button
                  className={styles["logout-button"]}
                  label="Выйти"
                  type="button"
                  onClick={logOut}
                />
              </div>
            )}
          </div>
        ) : (
          <Link to="/auth">
            <img
              className={styles["action-icons__item"]}
              src={user}
              alt="user"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
