import Input from "../../ui/input/Input";
import Button from "../../ui/Button/Button";

import styles from "./signUp.module.scss";
import { ErrorType } from "../../../dal/types";
import type { ChangeEvent, FormEvent } from "react";

interface SignUp {
  passwordValue: string;
  userNameValue: string;
  confirmPasswordValue: string;
  getUserNameValue: (e: ChangeEvent<HTMLInputElement>) => void;
  getPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  getConfirmPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  signUp: (e: FormEvent<HTMLFormElement>) => void;
  isPasswordMatch: boolean;
  setIsLogin: (value: boolean) => void;
  error: ErrorType;
  isPasswordVisible: boolean;
  setIsPasswordVisible: (value: boolean) => void;
  isConfirmPasswordVisible: boolean;
  setIsConfirmPasswordVisible: (value: boolean) => void;
}

const SignUp = ({
  error,
  userNameValue,
  getUserNameValue,
  passwordValue,
  getPasswordValue,
  setIsLogin,
  signUp,
  confirmPasswordValue,
  getConfirmPasswordValue,
  isPasswordMatch,
  isPasswordVisible,
  setIsPasswordVisible,
  isConfirmPasswordVisible,
  setIsConfirmPasswordVisible,
}: SignUp) => {
  return (
    <form onSubmit={signUp} className={styles["sign-up__container"]}>
      {/* Username */}
      <div className={styles["input-container"]}>
        {error === ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY && (
          <p className={styles["error-message"]}>
            {ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY}
          </p>
        )}
      </div>
      <div className={styles["input-container"]}>
        <Input
          value={userNameValue}
          onChange={getUserNameValue}
          type="text"
          className={`${styles.login} ${styles["input-field"]}`}
          placeholder="Username"
        />
        {error === ErrorType.IS_USER_NAME_ALREADY_EXIST && (
          <p className={styles["error-message"]}>
            {ErrorType.IS_USER_NAME_ALREADY_EXIST}
          </p>
        )}
      </div>

      {/* Password */}
      <div className={styles["input-container"]}>
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

        {error === ErrorType.INVALID_PASSWORD && (
          <p className={styles["error-message"]}>
            {ErrorType.INVALID_PASSWORD}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className={styles["input-container"]}>
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
            onClick={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
            className={styles["toggle-password"]}
          />
        ) : (
          <Button
            label="Скрыть пароль"
            type="button"
            onClick={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
            className={styles["toggle-password"]}
          />
        )}

        {isPasswordMatch ? (
          <p className={styles["success-message"]}>Пароли совпадают</p>
        ) : (
          confirmPasswordValue.length > 0 &&
          passwordValue.length > 0 &&
          !isPasswordMatch && (
            <p className={styles["error-message"]}>Пароли не совпадают</p>
          )
        )}
      </div>

      <Button type="submit" label="Sign Up" className={styles["sign-up"]} />

      <div className={styles["to-sign-in__text"]}>
        <p className={styles["to-sign-in"]}>
          If you already have an account, you can
        </p>
        <Button
          label="Sign in"
          className={styles["to-sign-in__button"]}
          type="button"
          onClick={() => setIsLogin(false)}
        />
      </div>
    </form>
  );
};

export default SignUp;
