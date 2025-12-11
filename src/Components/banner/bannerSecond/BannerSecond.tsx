import styles from "./bannerSecond.module.scss";
import Button from "../../ui/Button/Button";
const BannerSecond = () => {
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
            <Button type="button" label="Shop Now" className={styles.btn} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSecond;
