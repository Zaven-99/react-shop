import Button from "../../ui/Button/Button";

import styles from "./signIn.module.scss";
import { ErrorType, SuccessType } from "../../../dal/types";
import type { ChangeEvent, FormEvent } from "react";
import UserName from "../signUp/userName/UserName";
import Password from "../signUp/password/Password";

interface SignIn {
  errors: {
    userName?: ErrorType;
    password?: ErrorType;
    confirmPassword?: ErrorType;
  };
  success: {
    userName?: SuccessType;
    password?: SuccessType;
  };
  userNameValue: string;
  getUserNameValue: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordValue: string;
  getPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  setIsSignInForm: (value: boolean) => void;
  signIn: (e: FormEvent<HTMLFormElement>) => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: (value: boolean) => void;
}

const SignIn = ({
  errors,
  success,
  userNameValue,
  getUserNameValue,
  passwordValue,
  getPasswordValue,
  setIsSignInForm,
  signIn,
  isPasswordVisible,
  setIsPasswordVisible,
}: SignIn) => {
  return (
    <form onSubmit={signIn} className={styles["sign-in__container"]}>
      <UserName
        userNameValue={userNameValue}
        getUserNameValue={getUserNameValue}
        errors={errors}
        success={success}
      />

      <Password
        success={success}
        errors={errors}
        passwordValue={passwordValue}
        getPasswordValue={getPasswordValue}
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
      />

      <Button label="Sign in" className={styles["sign-in"]} type="submit" />
      <div className={styles["to-sign-up__text"]}>
        <p className={styles["to-sign-up"]}>
          "If you don't have an account, you can"
        </p>
        <Button
          label="Sign up"
          className={styles["to-sign-up__button"]}
          type="button"
          onClick={() => setIsSignInForm(true)}
        />
      </div>
    </form>
  );
};

export default SignIn;
