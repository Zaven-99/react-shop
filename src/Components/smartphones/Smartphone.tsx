import { useSmartphone } from "../../bll/useSmartphone";
import SmartphoneItem from "./smartphoneItem/SmartphoneItem";
import styles from "./smartphone.module.scss";

const Smartphone = () => {
  const { smartphone } = useSmartphone();

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
