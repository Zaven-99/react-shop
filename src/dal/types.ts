export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Products {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  images?: string[];
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  reviews?: Review[];
  dimensions?: Dimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  returnPolicy?: string;
  minimumOrderQuantity?: string;
  tags?: string[];
  weight?: string;
}
export interface SearchResponse {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}
export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface FiltersVisibility {
  category: boolean;
  price: boolean;
  brand: boolean;
}

export enum ErrorType {
  NONE = "NONE",
  INVALID_SEARCH = "Ошибка при поиске!",
  INVALID_PRODUCTS = "Ошибка при загрузке всех товаров!",
  INVALID_PRODUCTS_BY_CATEGORY = "Не удалось получить товары по категориям!",
  INVALID_CATEGORY = "Не удалось загрузить категории!",
  INVALID_DATA = "Не удалось загрузить данные!",
  INVALID_PASSWORD = "Пароль должен содержать заглавную, строчную букву, цифру и спецсимвол",
  LOGIN_OR_PASSWORD_INPUT_IS_EMPTY = "Заполните поля",
  IS_USER_NAME_ALREADY_EXIST = "Пользователь с таким логином уже существует",
  IS_PASSWORD_OR_LOGIN_CORRECT = "Не правильный логин или пароль",
}

export interface User {
  id: number;
  email: string;
  password: string;
}
