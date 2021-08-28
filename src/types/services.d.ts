import { ComputedRef } from 'vue';

export type TechSkill = {
  name: string;
};

export type ImgType = 'png' | 'svg';
export type ImgAsset<T> = {
  [T in ImgType]?: string;
};
export interface Assets<T> {
  [T: string]: {
    dark?: ImgAsset;
    light?: ImgAsset;
    universal?: ImgAsset;
  };
}

export type CarouselItem = { id: number; imgSrc: string };

export interface IProject {
  name: string;
  description: ComputedRef<string>;
  images: CarouselItem[];
  demo: string;
  techStack: TechSkill[];
}
