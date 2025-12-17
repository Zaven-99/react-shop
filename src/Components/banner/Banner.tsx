import Button from "../ui/Button/Button";

import bannerImg from "../../assets/banner/bannerImg.png";

import styles from "./banner.module.scss";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className={styles["banner-container"]}>
        <div className={styles["banner-inner"]}>
          <div className={styles["banner-content"]}>
            <h1 className={styles["banner-title"]}>Pro.Beyond.</h1>
            <p className={styles["banner-subtitle"]}>
              IPhone 14 <span>Pro</span>
            </p>
            <p className={styles["banner-description"]}>
              Created to change everything for the better. For everyone
            </p>
            <Button
              onClick={() => navigate("/catalog")}
              type="button"
              label="Shop Now"
              className={styles.btn}
            />
          </div>
          <div className={styles["banner-img"]}>
            <img
              className={styles["banner-image"]}
              src={bannerImg}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
