import Button from "../../ui/Button/Button";

import styles from "./signUp.module.scss";
import { ErrorType, SuccessType } from "../../../dal/types";
import type { ChangeEvent, FormEvent } from "react";
import UserName from "./userName/UserName";
import Password from "./password/Password";
import ConfirmPassword from "./confirmPassword/ConfirmPassword";

interface SignUp {
  passwordValue: string;
  userNameValue: string;
  confirmPasswordValue: string;
  getUserNameValue: (e: ChangeEvent<HTMLInputElement>) => void;
  getPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  getConfirmPasswordValue: (e: ChangeEvent<HTMLInputElement>) => void;
  signUp: (e: FormEvent<HTMLFormElement>) => void;
  isPasswordMatch: boolean;
  setIsSignInForm: (value: boolean) => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: (value: boolean) => void;
  isConfirmPasswordVisible: boolean;
  setIsConfirmPasswordVisible: (value: boolean) => void;
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

const SignUp = ({
  errors,
  userNameValue,
  getUserNameValue,
  passwordValue,
  getPasswordValue,
  setIsSignInForm,
  signUp,
  confirmPasswordValue,
  getConfirmPasswordValue,
  isPasswordMatch,
  isPasswordVisible,
  setIsPasswordVisible,
  isConfirmPasswordVisible,
  setIsConfirmPasswordVisible,
  success,
}: SignUp) => {
  return (
    <form onSubmit={signUp} className={styles["sign-up__container"]}>
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

      <ConfirmPassword
        passwordValue={passwordValue}
        confirmPasswordValue={confirmPasswordValue}
        getConfirmPasswordValue={getConfirmPasswordValue}
        isPasswordMatch={isPasswordMatch}
        isConfirmPasswordVisible={isConfirmPasswordVisible}
        setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
        errors={errors}
      />
      <Button type="submit" label="Sign Up" className={styles["sign-up"]} />

      <div className={styles["to-sign-in__text"]}>
        <p className={styles["to-sign-in"]}>
          If you already have an account, you can
        </p>
        <Button
          label="Sign in"
          className={styles["to-sign-in__button"]}
          type="button"
          onClick={() => setIsSignInForm(false)}
        />
      </div>
    </form>
  );
};

export default SignUp;
