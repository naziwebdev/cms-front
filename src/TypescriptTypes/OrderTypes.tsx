import { productsTypes } from "./ProductTypes";
import { UsersTypes } from "./UserTypes";

export interface OrderTypes {
  _id: string;
  product: productsTypes;
  price: number;
  status: string;
  user: UsersTypes;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface orderFormTypes {
  product:string;
  price: number;
  user:string;
  status?:string;
}
