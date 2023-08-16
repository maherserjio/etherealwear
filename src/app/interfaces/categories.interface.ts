import { IImage } from './home.interface';

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

export interface IProduct {
  stars: number;
  _id: string;
  Name: string;
  description: string;
  price: string;
  __v: number;
  main_Image?: IImage;
  details_Top_Image?: IImage;
  details_Bottom_Image?: IImage;
  id: string;
}
