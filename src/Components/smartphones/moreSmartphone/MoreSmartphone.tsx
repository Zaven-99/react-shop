import { useMoreSmartphone } from "../../../bll/useMoreSmartphone";

import MoreSmartphoneItem from "./moreSmartphoneItem/MoreSmartphoneItem";
import Loading from "../../ui/loading/Loading";
import Error from "../../ui/error/Error";

import styles from "./moreSmartphone.module.scss";

const MoreSmartphone = () => {
  const { moreSmartphone, error, loading } = useMoreSmartphone();

  if (error) return <Error label={error} />;
  if (loading) return <Loading />;

  return (
    <section>
      <div className={styles["more-products__container"]}>
        <div className={styles["more-products__inner"]}>
          {moreSmartphone.map((item) => (
            <MoreSmartphoneItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              category={item.category}
              brand={item.brand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreSmartphone;
