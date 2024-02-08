export interface productsTypes {
  id: string;
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

interface categoryIdType {
  id: string;
  title: string;
  href: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
