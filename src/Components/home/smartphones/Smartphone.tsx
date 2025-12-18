import { useSmartphone } from "../../../bll/useSmartphone";

import SmartphoneItem from "./smartphoneItem/SmartphoneItem";
import Error from "../../ui/error/Error";
import Loading from "../../ui/loading/Loading";

import styles from "./smartphone.module.scss";

const Smartphone = () => {
  const { smartphone, error, loading } = useSmartphone();

  if (error) return <Error label={error} />;
  if (loading) return <Loading />;

  return (
    <main>
      <div className={styles["products-container"]}>
        <div className={styles["products-inner"]}>
          <div className={styles["grid-container"]}>
            {smartphone?.map((item) => (
              <SmartphoneItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                thumbnail={item.thumbnail}
                category={item.category}
                brand={item.brand}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Smartphone;
