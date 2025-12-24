import type { ChangeEvent } from "react";
import { ErrorType, SuccessType } from "../../../../dal/types";
import Button from "../../../ui/Button/Button";
import Input from "../../../ui/input/Input";
import styles from "../inputs.module.scss";

interface Password {
  passwordValue: string;
  getPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: (value: boolean) => void;
  errors: {
    userName?: ErrorType;
    password?: ErrorType;
    confirmPassword?: ErrorType;
  };
  success: {
    userName?: SuccessType;
    password?: SuccessType;
  };
}
const Password = ({
  getPasswordValue,
  isPasswordVisible,
  setIsPasswordVisible,
  errors,
  passwordValue,
  success,
}: Password) => {
  return (
    <div className={styles["input-container"]}>
      {errors.password === ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY && (
        <p className={styles["error-message"]}>
          {ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY}
        </p>
      )}
      <Input
        value={passwordValue}
        onChange={getPasswordValue}
        type={isPasswordVisible ? "text" : "password"}
        className={`${styles.password} ${styles["input-field"]}`}
        placeholder="Password"
      />
      {!isPasswordVisible ? (
        <Button
          label="Показать пароль"
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className={styles["toggle-password"]}
        />
      ) : (
        <Button
          label="Скрыть пароль"
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className={styles["toggle-password"]}
        />
      )}

      {errors.password === ErrorType.INVALID_PASSWORD && (
        <p className={styles["error-message"]}>{ErrorType.INVALID_PASSWORD}</p>
      )}
      {success.password === SuccessType.IS_PASSWORD_CORRECT && (
        <p className={styles["success-message"]}>
          {SuccessType.IS_PASSWORD_CORRECT}
        </p>
      )}
    </div>
  );
};

export default Password;
