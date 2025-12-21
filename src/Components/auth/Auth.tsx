import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import { useAuth } from "../../bll/useAuth";
import styles from "./auth.module.scss";
const LoginForm = () => {
  const {
    isLogin,
    error,
    userNameValue,
    getUserNameValue,
    passwordValue,
    getPasswordValue,
    setIsLogin,
    signUp,
    signIn,
    isPasswordMatch,
    getConfirmPasswordValue,
    confirmPasswordValue,
    isPasswordVisible,
    setIsPasswordVisible,
    isConfirmPasswordVisible,
    setIsConfirmPasswordVisible,
  } = useAuth();
  return (
    <div className={styles["auth-container"]}>
      {!isLogin ? (
        <SignIn
          error={error}
          userNameValue={userNameValue}
          getUserNameValue={getUserNameValue}
          passwordValue={passwordValue}
          getPasswordValue={getPasswordValue}
          setIsLogin={setIsLogin}
          signIn={signIn}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
        />
      ) : (
        <SignUp
          error={error}
          userNameValue={userNameValue}
          getUserNameValue={getUserNameValue}
          passwordValue={passwordValue}
          isPasswordMatch={isPasswordMatch}
          getConfirmPasswordValue={getConfirmPasswordValue}
          confirmPasswordValue={confirmPasswordValue}
          getPasswordValue={getPasswordValue}
          setIsLogin={setIsLogin}
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
