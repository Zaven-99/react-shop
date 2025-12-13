import styles from "./error.module.scss";

interface Error {
  label: string;
}
const Error = ({ label }: Error) => {
  return (
    <section className={styles["error"]}>
      <p className={styles["error-text"]}> {label}</p>
    </section>
  );
};

export default Error;
