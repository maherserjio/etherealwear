import { IProduct } from './home.interface';

export interface ICategory {
  _id: string;
  published_at: string;
  categoryName: string;
  collections: ICollection[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ICollection {
  _id: string;
  name: string;
  products: IProduct[];
  __v: number;
  id: string;
}
