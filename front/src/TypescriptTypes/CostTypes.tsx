import type{Value} from "react-multi-date-picker"

export interface CostTypes {
    title:string,
    status:string,
    date:string,
    price:number,
    _id:string,
    createdAt:string,
    updatedAt:string,
    __v:number
}
export interface CostFormTypes {
    title:string,
    status:string,
    date:Value,
    price:number,
}