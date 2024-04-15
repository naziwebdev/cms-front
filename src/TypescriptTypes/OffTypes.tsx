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
  percent: number;
  expireDay: number;
  maxUsage: number;
}

export interface allOffFormTypes {
  percent: number;
}
