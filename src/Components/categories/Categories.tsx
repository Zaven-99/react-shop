import arrowLeft from "../../assets/icons/category/arrow/arrowLeft.svg";
import arrowRight from "../../assets/icons/category/arrow/arrowRight.svg";

import styles from "./categories.module.scss";
const Categories = () => {
  return (
    <section>
      <div className={styles["categories-container"]}>
        <div className={styles.wrapper}>
          <h2 className={styles["category-title"]}>Browse By Category</h2>
          <div className={styles.arrow}>
            <img
              className={styles["arrow-left"]}
              src={arrowLeft}
              alt="arrowLeft"
            />
            <img
              className={styles["arrow-right"]}
              src={arrowRight}
              alt="arrowRight"
            />
          </div>
        </div>
        <div className={styles["categories-inner"]}>
          <ul>
            <li>
              <p>Phones</p>
            </li>
            <li>
              <p>Smart Watches</p>
            </li>
            <li>
              <p>Cameras</p>
            </li>
            <li>
              <p>Headphones</p>
            </li>
            <li>
              <p>Computers</p>
            </li>
            <li>
              <p>Gaming</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Categories;
