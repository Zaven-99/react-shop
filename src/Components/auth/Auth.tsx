import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import { useAuth } from "../../bll/useAuth";
import styles from "./auth.module.scss";
const LoginForm = () => {
  const {
    isSignInForm,
    errors,
    userNameValue,
    getUserNameValue,
    passwordValue,
    getPasswordValue,
    setIsSignInForm,
    signUp,
    signIn,
    isPasswordMatch,
    getConfirmPasswordValue,
    confirmPasswordValue,
    isPasswordVisible,
    setIsPasswordVisible,
    isConfirmPasswordVisible,
    setIsConfirmPasswordVisible,
    success,
  } = useAuth();

  return (
    <div className={styles["auth-container"]}>
      {!isSignInForm ? (
        <SignIn
          success={success}
          errors={errors}
          userNameValue={userNameValue}
          getUserNameValue={getUserNameValue}
          passwordValue={passwordValue}
          getPasswordValue={getPasswordValue}
          setIsSignInForm={setIsSignInForm}
          signIn={signIn}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
        />
      ) : (
        <SignUp
          success={success}
          errors={errors}
          userNameValue={userNameValue}
          getUserNameValue={getUserNameValue}
          passwordValue={passwordValue}
          isPasswordMatch={isPasswordMatch}
          getConfirmPasswordValue={getConfirmPasswordValue}
          confirmPasswordValue={confirmPasswordValue}
          getPasswordValue={getPasswordValue}
          setIsSignInForm={setIsSignInForm}
          signUp={signUp}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          isConfirmPasswordVisible={isConfirmPasswordVisible}
          setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
        />
      )}
    </div>
  );
};

export default LoginForm;
