export type TechSkill = {
  name: string;
};

export type ImgType = 'png' | 'svg';
export type ImgAsset = {
  [key in ImgType]?: string;
};
export interface Assets extends ImgAsset {
  [key: string]: {
    dark?: ImgAsset;
    light?: ImgAsset;
    universal?: ImgAsset;
  };
}
