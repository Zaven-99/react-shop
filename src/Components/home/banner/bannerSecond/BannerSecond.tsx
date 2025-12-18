import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";

import styles from "./bannerSecond.module.scss";

const BannerSecond = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className={styles["banner-second__container"]}>
        <div className={styles["banner-second__inner"]}>
          <div className={styles["banner-second__content"]}>
            <h2 className={styles["banner-second__title"]}>
              Big Summer <span>Sale</span>
            </h2>
            <p className={styles["banner-second__description"]}>
              Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
            <Button
              onClick={() => navigate("/catalog")}
              type="button"
              label="Shop Now"
              className={styles.btn}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSecond;
