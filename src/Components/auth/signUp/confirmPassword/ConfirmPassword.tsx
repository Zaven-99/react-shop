import styles from "../inputs.module.scss";
import Input from "../../../ui/input/Input";
import Button from "../../../ui/Button/Button";
import type { ChangeEvent } from "react";
import { ErrorType } from "../../../../dal/types";

interface ConfirmPassword {
  passwordValue: string;
  confirmPasswordValue: string;
  getConfirmPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  isPasswordMatch: boolean;
  isConfirmPasswordVisible: boolean;
  setIsConfirmPasswordVisible: (value: boolean) => void;
  errors: {
    userName?: ErrorType;
    password?: ErrorType;
    confirmPassword?: ErrorType;
  };
}
const ConfirmPassword = ({
  passwordValue,
  confirmPasswordValue,
  getConfirmPasswordValue,
  isPasswordMatch,
  errors,
  isConfirmPasswordVisible,
  setIsConfirmPasswordVisible,
}: ConfirmPassword) => {
  return (
    <div className={styles["input-container"]}>
      {errors.confirmPassword ===
        ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY && (
        <p className={styles["error-message"]}>
          {ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY}
        </p>
      )}
      {errors.confirmPassword === ErrorType.PASSWORDS_DO_NOT_MATCH && (
        <p className={styles["error-message"]}>
          {ErrorType.PASSWORDS_DO_NOT_MATCH}
        </p>
      )}
      <Input
        value={confirmPasswordValue}
        onChange={getConfirmPasswordValue}
        type={isConfirmPasswordVisible ? "text" : "password"}
        className={`${styles.password} ${styles["input-field"]}`}
        placeholder="Confirm password"
      />
      {!isConfirmPasswordVisible ? (
        <Button
          label="Показать пароль"
          type="button"
          onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          className={styles["toggle-password"]}
        />
      ) : (
        <Button
          label="Скрыть пароль"
          type="button"
          onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          className={styles["toggle-password"]}
        />
      )}

      {isPasswordMatch ? (
        <p className={styles["success-message"]}>Passwords match</p>
      ) : (
        confirmPasswordValue.length > 0 &&
        passwordValue.length > 0 &&
        !isPasswordMatch && (
          <p className={styles["error-message"]}>Passwords do not match</p>
        )
      )}
    </div>
  );
};

export default ConfirmPassword;
