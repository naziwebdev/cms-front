export interface NotifTypes {
  _id: string;
  message: string;
  admin: {
    _id: string;
    name: string;
  };
  seen: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
