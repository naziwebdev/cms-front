export interface UsersTypes {
  _id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  age: number;
  gender: string;
  role: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserFormTypes {
  avatar?: any;
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface UserEditFormTypes {
  avatar?: any;
  name: string;
  username: string;
  email: string;
  phone: string;
  password?:any;
  confirmPassword?:any;
}
