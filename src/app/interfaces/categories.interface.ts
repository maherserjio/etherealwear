import { IImage } from './home.interface';

export interface ICategory {
  _id: string;
  published_at: string;
  categoryName: string;
  collections: Collection[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface Collection {
  _id: string;
  name: string;
  products: Product[];
  __v: number;
  id: string;
}

export interface Product {
  stars: number;
  details_Bottom_Image: IImage;
  _id: string;
  Name: string;
  description: string;
  price: string;
  __v: number;
  details_Top_Image?: IImage;
  main_Image?: IImage;
  id: string;
  image?: string;
}
