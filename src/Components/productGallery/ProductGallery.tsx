import Button from "../ui/Button/Button";

import styles from "./productGallery.module.scss";
import playstation from "../../assets/productGallery/playstation.jpg";
import airpodsmax from "../../assets/productGallery/airpodsmax.png";
import macbook from "../../assets/productGallery/macbook.png";
import visionpro from "../../assets/productGallery/visionpro.png";
import { useNavigate } from 'react-router-dom';
const ProductGallery = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles.first}`}>
          <div className={styles.wrapper}>
            <img
              className={styles["first-img"]}
              src={playstation}
              alt={playstation}
            />
            <p className={styles["first-description"]}>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className={`${styles["grid-item"]} ${styles.second}`}>
          <div className={styles["second-content"]}>
            <h2 className={styles["second-title"]}>
              Macbook <span>Air </span>
            </h2>
            <p className={styles["second-description"]}>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Button onClick={() => navigate("/catalog")} type="button" label="Shop Now" className={styles.btn} />
          </div>

          <div className={styles["second-img"]}>
            <img src={macbook} alt={macbook} />
          </div>
        </div>
        <div className={`${styles["grid-item"]} ${styles.third}`}>
          <img src={airpodsmax} alt={airpodsmax} />
          <div className={styles["third-content"]}>
            <h2 className={styles["third-title"]}>
              Apple AirPods <span>Max</span>
            </h2>
            <p className={styles["third-description"]}>
              Computational audio. Listen, it's powerful
            </p>
          </div>
        </div>
        <div className={`${styles["grid-item"]} ${styles.fourth}`}>
          <img src={visionpro} alt={visionpro} />
          <div className={styles["fourth-content"]}>
            <h2 className={styles["fourth-title"]}>
              Apple Vision <span>Pro</span>
            </h2>
            <p className={styles["fourth-description"]}>
              An immersive way to experience entertainment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
