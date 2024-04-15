export interface TicketTypes {
  _id: string;
  title: string;
  body: string;
  user: {
    _id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    age?: number;
    gender?: string;
    role: string;
    avatar?: string;
    createdAt: string;
    updatedAt: string;
    __v: 0;
  };
  answer: number;
  isAnswer: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface answerTicketType {
    _id: string;
    title: string;
    body: string;
    user: {
      _id: string;
      name: string;
      avatar?: string;
    };
    answer: number;
    isAnswer: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface oneTicketTypes {
  ticket: {
    _id: string;
    title: string;
    body: string;
    user: {
      _id: string;
      name: string;
      avatar?: string;
    };
    answer: number;
    isAnswer: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  answerTicket:answerTicketType[];
}
