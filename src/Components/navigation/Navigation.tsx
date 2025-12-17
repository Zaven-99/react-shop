import { NavLink, useParams } from "react-router-dom";

import styles from "./navigation.module.scss";

import arrow from "../../assets/icons/arrow.svg";

const Navigation = () => {
  const { brand, category } = useParams();

  return (
    <nav>
      <ul className={styles["navigation-list"]}>
        <li className={styles["navigation-list__item"]}>
          <NavLink to="/">Home</NavLink>
          <img src={arrow} alt="arrow" />
        </li>
        <li className={styles["navigation-list__item"]}>
          <NavLink to={`${category}`}>{category}</NavLink>
          <img src={arrow} alt="arrow" />
        </li>
        <li className={styles["navigation-list__item"]}>
          {brand}
          <img src={arrow} alt="arrow" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
