export interface CommentTypes {
  _id: string;
  user: {
    _id: string;
    name: string;
   avatar?:string
  };
  title: string;
  body: string;
  score: number;
  product: {
    _id: string;
    title: string;
  } | null;
  isAnswer: number;
  isAccept: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  answerContent: null | {
    _id: string;
    user: {
      _id: string;
      name: string;
    };
    title: string;
    body: string;
    score: number;
    product: {
      _id: string;
      title: string;
    } | null;
    isAnswer: number;
    isAccept: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}


export interface CommentReplyType {
  title: string;
  body: string;
}
