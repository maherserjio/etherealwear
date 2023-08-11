import { IBanner } from './home.interface';

export interface IAboutData {
  _id: string;
  published_at: string;
  banner: IBanner;
  Skills_section: ISkillsSection;
  Services_section: IServicesSection[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ISkillsSection {
  _id: string;
  title: string;
  top_description: string;
  quote: string;
  bottom_description: string;
  __v: number;
  image: any;
  instagram_link: string;
  facebook_link: string;
  id: string;
}

export interface IServicesSection {
  _id: string;
  title: string;
  description: string;
  services_card: IServicesCard[];
  __v: number;
  id: string;
}

export interface IServicesCard {
  _id: string;
  title: string;
  description: string;
  __v: number;
  image: any;
  id: string;
}
