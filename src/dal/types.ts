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
  INVALID_SEARCH = "Error during search!",
  INVALID_PRODUCTS = "Error loading all products!",
  INVALID_PRODUCTS_BY_CATEGORY = "Failed to get products by category!",
  INVALID_CATEGORY = "Failed to load categories!",
  INVALID_DATA = "Failed to load data!",
  INVALID_PASSWORD = "Password must contain an uppercase letter, a lowercase letter, a number, and a special character",
  LOGIN_OR_PASSWORD_INPUT_IS_EMPTY = "Please fill in the fields",
  IS_USER_NAME_ALREADY_EXIST = "A user with this username already exists",
  IS_PASSWORD_OR_LOGIN_CORRECT = "Incorrect username or password",
  IS_USER_NAME_IS_CORRECT = "Username must be at least 5 letters and use only English letters",
  PASSWORDS_DO_NOT_MATCH = "Passwords do not match",
}

export enum SuccessType {
  NONE = "NONE",
  IS_PASSWORD_CORRECT = "Password is correct",
  IS_USER_NAME_IS_CORRECT = "User name is correct",
}

export interface User {
  id: number;
  email: string;
  password: string;
}
