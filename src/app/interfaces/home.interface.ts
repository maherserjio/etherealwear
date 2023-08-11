export interface IHome {
  _id: string;
  published_at: string;
  banner: IBanner;
  Categories_circle_section: ICategoriesCircleSection[];
  slider_section: ISliderSection;
  explore_section: IExploreSection;
  social_media_section: ISocialMediaSection;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface IBanner {
  _id: string;
  title: string;
  __v: number;
  background_Image: IImage;
  id: string;
}

export interface IImage {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: IFormats;
  provider: string;
  related: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface IFormats {
  thumbnail?: IThumbnail;
  large?: ILarge;
  medium?: IMedium;
  small?: ISmall;
}

export interface IThumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: any;
  url: string;
}

export interface ILarge {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: any;
  url: string;
}

export interface IMedium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: any;
  url: string;
}

export interface ISmall {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: any;
  url: string;
}

export interface ICategoriesCircleSection {
  isMainCircle: boolean;
  _id: string;
  title: string;
  description: string;
  __v: number;
  background_Image: IImage;
  id: string;
}

export interface ISliderSection {
  _id: string;
  title: string;
  description: string;
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
  main_Image: IImage;
  details_Top_Image: IImage;
  details_Bottom_Image: IImage;
  id: string;
}

export interface IImage {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: IFormats;
  provider: string;
  related: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface IExploreSection {
  _id: string;
  title: string;
  top_description: string;
  quote: string;
  bottom_description: string;
  __v: number;
  bottom_image: IImage;
  top_image: IImage;
  id: string;
}
export interface IImage {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: IFormats;
  provider: string;
  related: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ISocialMediaSection {
  _id: string;
  social_media_image: ISocialMediaImage[];
  __v: number;
  description: string;
  title: string;
  id: string;
}

export interface ISocialMediaImage {
  _id: string;
  title: string;
  __v: number;
  background_image: IImage;
  instagram_link: string;
  id: string;
}
