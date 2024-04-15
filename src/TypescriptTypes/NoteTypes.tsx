export interface NoteTypes {
  _id: string;
  subject: string;
  body: string;
  user: {
    _id: string;
    name: string;
  };
  haveStar:boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface NoteFormType {
  subject: string;
  body: string;
}
