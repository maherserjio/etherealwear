import { IBanner } from './home.interface';

export interface ISingleProduct {
  _id: string;
  published_at: string;
  banner: IBanner;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
