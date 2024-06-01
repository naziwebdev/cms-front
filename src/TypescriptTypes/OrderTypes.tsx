import { productsTypes } from "./ProductTypes";
import { UsersTypes } from "./UserTypes";

export interface OrderTypes {
  _id: string;
  product: productsTypes;
  price: number | string;
  status: string;
  user: UsersTypes;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface orderFormTypes {
  product:string;
  price:string | number;
  user:string;
  status?:string;
}
