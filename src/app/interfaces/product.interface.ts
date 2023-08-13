import { IBanner } from './home.interface';

export interface IProductData {
  _id: string;
  published_at: string;
  banner: IBanner;
  description: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
