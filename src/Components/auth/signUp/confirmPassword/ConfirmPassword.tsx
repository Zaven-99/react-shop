import { ErrorType, SuccessType } from "../../../../dal/types";
import type { ChangeEvent } from "react";

import Input from "../../../ui/input/Input";
import Button from "../../../ui/Button/Button";

import styles from "../inputs.module.scss";

interface ConfirmPassword {
  confirmPasswordValue: string;
  getConfirmPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  isConfirmPasswordVisible: boolean;
  setIsConfirmPasswordVisible: (value: boolean) => void;
  errors: {
    userName?: ErrorType;
    password?: ErrorType;
    confirmPassword?: ErrorType;
  };
  success: {
    userName?: SuccessType;
    confirmPassword?: SuccessType;
  };
}
const ConfirmPassword = ({
  confirmPasswordValue,
  getConfirmPasswordValue,
  errors,
  success,
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
      {success.confirmPassword === SuccessType.PASSWORDS_MATCH && (
        <p className={styles["success-message"]}>
          {SuccessType.PASSWORDS_MATCH}
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
    </div>
  );
};

export default ConfirmPassword;
