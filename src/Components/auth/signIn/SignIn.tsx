import Input from "../../ui/input/Input";
import Button from "../../ui/Button/Button";

import styles from "./signIn.module.scss";
import { ErrorType } from "../../../dal/types";
import type { ChangeEvent, FormEvent } from "react";

interface SignIn {
  error: ErrorType;
  userNameValue: string;
  getUserNameValue: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordValue: string;
  getPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  setIsLogin: (value: boolean) => void;
  signIn: (e: FormEvent<HTMLFormElement>) => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: (value: boolean) => void;
}

const SignIn = ({
  error,
  userNameValue,
  getUserNameValue,
  passwordValue,
  getPasswordValue,
  setIsLogin,
  signIn,
  isPasswordVisible,
  setIsPasswordVisible,
}: SignIn) => {
  return (
    <form onSubmit={signIn} className={styles["sign-in__container"]}>
      <div className={styles["input-container"]}>
        {error === ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY && (
          <p className={styles["error-message"]}>
            {ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY}
          </p>
        )}
        {error === ErrorType.IS_PASSWORD_OR_LOGIN_CORRECT && (
          <p className={styles["error-message"]}>
            {ErrorType.IS_PASSWORD_OR_LOGIN_CORRECT}
          </p>
        )}
        <Input
          value={userNameValue}
          onChange={getUserNameValue}
          type={"text"}
          className={`${styles.login} ${styles["input-field"]}`}
          placeholder="Username"
        />
      </div>
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
      </div>

      <Button label="Sign in" className={styles["sign-in"]} type="submit" />
      <div className={styles["to-sign-up__text"]}>
        <p className={styles["to-sign-up"]}>
          "If you don't have an account, you can"
        </p>
        <Button
          label="Sign up"
          className={styles["to-sign-up__button"]}
          type="button"
          onClick={() => setIsLogin(true)}
        />
      </div>
    </form>
  );
};

export default SignIn;
