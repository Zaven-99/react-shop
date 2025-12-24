import { useEffect, useState } from "react";
import styles from "./message.module.scss";
const Message = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isShown = localStorage.getItem("isShown");
    if (!isShown) {
      setShowModal(true);
    }
  }, []);

  const handleClose = (
    e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e?.stopPropagation();
    localStorage.setItem("isShown", "true");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div onClick={(e) => handleClose(e)} className={styles["modal-overlay"]}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles["modal-content"]}
      >
        <h1 className={styles["welcome"]}>Привет!</h1>
        <p className={styles["paragraph"]}>
          Этот сайт - учебный проект, созданный для практики и экспериментов.
          Здесь могут использоваться разные подходы, не всегда полностью
          соответствующие «боевым» практикам.
        </p>
        <br />
        <p className={styles["paragraph"]}>
          В коде могут встречаться неточности или нестандартные решения - это
          часть обучения и эксперимента.
        </p>
        <br />
        <p className={styles["paragraph"]}>Спасибо за понимание!</p>
        <button className={styles["button"]} onClick={handleClose}>
          Хорошо
        </button>
      </div>
    </div>
  );
};

export default Message;
