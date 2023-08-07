export interface INewsLetterResponse {
  _id: string;
  published_at: string;
  News_letter: INewsLetter;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface INewsLetter {
  _id: string;
  title: string;
  description: string;
  phone_number: string;
  email: string;
  work_hours: string;
  instagram_link: string;
  facebook_link: string;
  __v: number;
  id: string;
}
