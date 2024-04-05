

export interface TodoTypes {
    _id:string,
    title:string,
    isComplete:boolean,
    user:string,
    date:string,
    haveStar:boolean,
    createdAt:string,
    updatedAt:string,
    __v:number
}

export interface TodoFormTypes {
    title:string;
    date:string;
}