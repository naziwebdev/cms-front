export interface OffTypes {
  _id: string;
  code: string;
  percent: number;
  expireDay: number;
  maxUsage: number;
  countUsaged: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface offFormTypes {
  code: string;
  percent:string;
  expireDay:string;
  maxUsage:string;
}

export interface allOffFormTypes {
  percent:string;
}
