import { useDiscountSmartphone } from "../../../../bll/useDiscountSmartphone";
import { ErrorType } from "../../../../dal/types";

import DiscountSmartphoneItem from "./discountSmartphoneItem/DiscountSmartphoneItem";
import Loading from "../../../ui/loading/Loading";
import Error from "../../../ui/error/Error";

import styles from "./discountSmartphone.module.scss";

const DiscountProducts = () => {
  const { discountSmartphone, error, loading } = useDiscountSmartphone();

  if (loading) return <Loading />;

  return (
    <section>
      <div className={styles["discount-products__container"]}>
        <h2 className={styles["discount-products__title"]}>
          Discounts up to -50%
        </h2>
        <div className={styles["discount-products__inner"]}>
          {error === ErrorType.INVALID_PRODUCTS ? (
            <Error label={error} />
          ) : (
            <>
              {discountSmartphone.map((item) => (
                <DiscountSmartphoneItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  category={item.category}
                  brand={item.brand}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
