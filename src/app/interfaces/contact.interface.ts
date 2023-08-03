import { IBanner } from './home.interface';

export interface IContactData {
  _id: string;
  title: string;
  description: string;
  published_at: string;
  banner: IBanner;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
