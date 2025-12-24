import type { ChangeEvent } from "react";
import styles from "../inputs.module.scss";
import { ErrorType, SuccessType } from "../../../../dal/types";
import Input from "../../../ui/input/Input";

interface UserName {
  userNameValue: string;
  getUserNameValue: (e: ChangeEvent<HTMLInputElement>) => void;
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

const UserName = ({
  userNameValue,
  getUserNameValue,
  errors,
  success,
}: UserName) => {
  return (
    <div>
      <div className={styles["input-container"]}>
        <Input
          value={userNameValue}
          onChange={getUserNameValue}
          type="text"
          className={`${styles.login} ${styles["input-field"]}`}
          placeholder="User name"
        />
        <div className={styles["input-container"]}>
          {errors.userName === ErrorType.IS_USER_NAME_IS_CORRECT && (
            <p className={styles["error-message"]}>
              {ErrorType.IS_USER_NAME_IS_CORRECT}
            </p>
          )}
          {errors.userName === ErrorType.IS_USER_NAME_ALREADY_EXIST && (
            <p className={styles["error-message"]}>
              {ErrorType.IS_USER_NAME_ALREADY_EXIST}
            </p>
          )}
          {success.userName === SuccessType.IS_USER_NAME_IS_CORRECT && (
            <p className={styles["success-message"]}>
              {SuccessType.IS_USER_NAME_IS_CORRECT}
            </p>
          )}
          {errors.userName === ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY && (
            <p className={styles["error-message"]}>
              {ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY}
            </p>
          )}
          {errors.userName === ErrorType.IS_PASSWORD_OR_LOGIN_CORRECT && (
            <p className={styles["error-message"]}>
              {ErrorType.IS_PASSWORD_OR_LOGIN_CORRECT}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserName;
