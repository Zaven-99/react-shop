import { useState, useEffect, type ChangeEvent } from "react";
import { ErrorType, SuccessType } from "../dal/types";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isSignInForm, setIsSignInForm] = useState(false);

  const [errors, setErrors] = useState<{
    userName?: ErrorType;
    password?: ErrorType;
    confirmPassword?: ErrorType;
  }>({});

  const [success, setSuccess] = useState<{
    userName?: SuccessType;
    password?: SuccessType;
  }>({});

  const navigate = useNavigate();

  const getUserNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserNameValue(value);

    const trimmed = value.trim();
    const isValid = /^[A-Za-z]{5,}$/.test(trimmed);

    setErrors((prev) => ({
      ...prev,
      userName: !trimmed
        ? ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY
        : !isValid
        ? ErrorType.USER_NAME_DO_NOT_CORRECT
        : undefined,
    }));
    setSuccess((prev) => ({
      ...prev,
      userName: isValid ? SuccessType.USER_NAME_IS_CORRECT : undefined,
    }));
  };

  const getPasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value);

    const trimmed = value.trim();
    const hasUpper = /[A-Z]/.test(trimmed);
    const hasLower = /[a-z]/.test(trimmed);
    const hasNum = /\d/.test(trimmed);
    const hasSpecial = /[!@#$%^&.*()_+?><~=-]/.test(trimmed);

    setErrors((prev) => ({
      ...prev,
      password: !trimmed
        ? ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY
        : !(hasUpper && hasLower && hasNum && hasSpecial)
        ? ErrorType.INVALID_PASSWORD
        : undefined,
      confirmPassword:
        confirmPasswordValue && trimmed !== confirmPasswordValue
          ? ErrorType.PASSWORDS_DO_NOT_MATCH
          : undefined,
    }));

    setSuccess((prev) => ({
      ...prev,
      password:
        hasUpper && hasLower && hasNum && hasSpecial
          ? SuccessType.PASSWORD_IS_CORRECT
          : undefined,
    }));

    setIsPasswordMatch(trimmed === confirmPasswordValue && trimmed.length > 0);
  };

  const getConfirmPasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPasswordValue(value);

    setIsPasswordMatch(value === passwordValue && value.length > 0);
    setErrors((prev) => ({
      ...prev,
      confirmPassword:
        value && value !== passwordValue
          ? ErrorType.PASSWORDS_DO_NOT_MATCH
          : undefined,
    }));
    setSuccess((prev) => ({
      ...prev,
      confirmPassword:
        value && value === passwordValue
          ? SuccessType.PASSWORDS_MATCH
          : undefined,
    }));
  };

  const signUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    const trimmedUserName = userNameValue.trim();
    const trimmedPassword = passwordValue.trim();
    const trimmedConfirm = confirmPasswordValue.trim();

    if (!trimmedUserName)
      newErrors.userName = ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY;
    else if (!/^[A-Za-z]{5,}$/.test(trimmedUserName))
      newErrors.userName = ErrorType.USER_NAME_DO_NOT_CORRECT;

    const hasUpper = /[A-Z]/.test(trimmedPassword);
    const hasLower = /[a-z]/.test(trimmedPassword);
    const hasNum = /\d/.test(trimmedPassword);
    const hasSpecial = /[!@#$%^&.*()_+?><~=-]/.test(trimmedPassword);

    if (!trimmedPassword)
      newErrors.password = ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY;
    else if (!(hasUpper && hasLower && hasNum && hasSpecial))
      newErrors.password = ErrorType.INVALID_PASSWORD;

    if (!trimmedConfirm)
      newErrors.confirmPassword = ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY;
    else if (trimmedPassword !== trimmedConfirm)
      newErrors.confirmPassword = ErrorType.PASSWORDS_DO_NOT_MATCH;

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const savedUsers = localStorage.getItem("users");
    const users: { username: string; password: string }[] = savedUsers
      ? JSON.parse(savedUsers)
      : [];

    if (users.some((u) => u.username === trimmedUserName)) {
      setErrors({ userName: ErrorType.USER_NAME_ALREADY_EXIST });
      return;
    }

    const newUser = { username: trimmedUserName, password: trimmedPassword };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    navigate("/");
    setUserNameValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
    setErrors({});
    setSuccess({});
  };

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedUserName = userNameValue.trim();
    const trimmedPassword = passwordValue.trim();

    if (!trimmedUserName || !trimmedPassword) {
      setErrors({
        userName: !trimmedUserName
          ? ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY
          : undefined,
        password: !trimmedPassword
          ? ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY
          : undefined,
      });
      return;
    }

    const savedUsers = localStorage.getItem("users");
    const users: { username: string; password: string }[] = savedUsers
      ? JSON.parse(savedUsers)
      : [];

    const userExists = users.find(
      (u) => u.username === trimmedUserName && u.password === trimmedPassword
    );

    if (!userExists) {
      setErrors({ userName: ErrorType.PASSWORD_OR_LOGIN_DO_NOT_CORRECT });
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(userExists));
    navigate("/");
    setUserNameValue("");
    setPasswordValue("");
    setErrors({});
    setSuccess({});
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return {
    isSignInForm,
    errors,
    success,
    userNameValue,
    getUserNameValue,
    passwordValue,
    getPasswordValue,
    confirmPasswordValue,
    getConfirmPasswordValue,
    isPasswordMatch,
    isPasswordVisible,
    setIsPasswordVisible,
    isConfirmPasswordVisible,
    setIsConfirmPasswordVisible,
    setIsSignInForm,
    signUp,
    signIn,
  };
};
