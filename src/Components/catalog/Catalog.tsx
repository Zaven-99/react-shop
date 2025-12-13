import { useCatalog } from "../../bll/useCatalog";
import Button from "../ui/Button/Button";
import Loading from "../ui/loading/Loading";
import Error from "../ui/error/Error";

import styles from "./catalog.module.scss";
import add from "../../assets/icons/productsItem/add.svg";

const Catalog = () => {
  const { allProducts, error, loading } = useCatalog();
  if (loading) return <Loading />;
  if (error) return <Error label={error} />;
  return (
    <section>
      <div className={styles["catalog-container"]}>
        <div className={styles["catalog-inner"]}>
          <div className={styles["product-list"]}>
            {allProducts.map((item) => (
              <div key={item.id} className={styles["product-item"]}>
                <img className={styles.add} src={add} alt={add} />
                <img
                  className={styles["product-img"]}
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className={styles["product-content"]}>
                  <p className={styles["product-title"]}>
                    {item.title.length > 40
                      ? item.title.slice(0, 40) + "..."
                      : item.title}
                  </p>
                  <h2 className={styles["product-price"]}>${item.price}</h2>
                </div>
                <Button type="button" className={styles.btn} label="Buy Now" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
