import loading from "../../../assets/icons/loading/loading.svg";
import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <section className={styles["loading"]}>
      <div className={styles["loading-background"]}>
        <img className={styles["loading-spinner"]} src={loading} alt="" />
      </div>
    </section>
  );
};

export default Loading;
