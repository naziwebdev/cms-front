export interface productsTypes {
  _id: string;
  title: string;
  price: string;
  cover: string;
  href: string;
  discount: number;
  categoryId: categoryIdType;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface productsFormTypes {
  title: string;
  cover:any;
  price: string;
  href: string;
  categoryId:string;
}

export interface categoryIdType {
  _id: string;
  title: string;
  href: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
