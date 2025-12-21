import { useState, type ChangeEvent } from "react";

import { ErrorType } from "../dal/types";

export const useAuth = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [error, setError] = useState<ErrorType>(ErrorType.NONE);
  const [isLogin, setIsLogin] = useState(false);

  const getUserNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(e.target.value);
  };

  const getPasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value);

    const trimmedPassword = value.trim();

    const hasUpperCase = /[A-Z]/.test(trimmedPassword);
    const hasLowerCase = /[a-z]/.test(trimmedPassword);
    const hasNumber = /\d/.test(trimmedPassword);
    const hasSpecialSymbol = /[!@#$%^&.*()_+?><~=-]/.test(trimmedPassword);

    if (trimmedPassword.length === 0) {
      setError(ErrorType.NONE);
    } else if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialSymbol) {
      setError(ErrorType.NONE);
    } else {
      setError(ErrorType.INVALID_PASSWORD);
    }

    setIsPasswordMatch(value === confirmPasswordValue && value.length > 0);
  };

  const getConfirmPasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPasswordValue(value);

    if (value === passwordValue && value.length === passwordValue.length) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
  };

  const signUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userNameValue.trim() || !passwordValue.trim()) {
      setError(ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY);
      return;
    }

    // 1. Получаем пользователей из localStorage
    const savedUsers = localStorage.getItem("users");
    const users: { username: string; password: string }[] = savedUsers
      ? JSON.parse(savedUsers)
      : [];

    const exists = users.some((user) => user.username === userNameValue);

    if (exists) {
      setError(ErrorType.IS_USER_NAME_ALREADY_EXIST);
      return;
    }

    // 2. Новый пользователь
    const newUser = {
      username: userNameValue,
      password: passwordValue,
    };

    // 3. Добавляем
    users.push(newUser);

    // 4. Сохраняем обратно
    localStorage.setItem("users", JSON.stringify(users));

    alert("Регистрация успешна");
    setUserNameValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
  };

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userNameValue.trim() || !passwordValue.trim()) {
      setError(ErrorType.LOGIN_OR_PASSWORD_INPUT_IS_EMPTY);
      return;
    }
    const savedUsers = localStorage.getItem("users");
    const users: { username: string; password: string }[] = savedUsers
      ? JSON.parse(savedUsers)
      : [];

    const userExists = users.find(
      (user) =>
        user.username === userNameValue.trim() &&
        user.password === passwordValue.trim()
    );

    if (!userExists) {
      setError(ErrorType.IS_PASSWORD_OR_LOGIN_CORRECT);
      return;
    } else {
      localStorage.setItem("currentUser", JSON.stringify(userExists));
      alert("Успешный вход");
      setUserNameValue("");
      setPasswordValue("");
    }
  };

  return {
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
  };
};
