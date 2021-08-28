import { Assets, ImgType } from '@/types';

export default function useAssets(): Partial<Assets> {
  const pngs = import.meta.globEager(`/src/assets/*.png`);

  function getImagePath(imgName: string, imgType: ImgType): string {
    const imgPath = '/src/assets';
    switch (imgType) {
      case 'png':
        return pngs[`${imgPath}/${imgName}.${imgType}`].default;
      default:
        return getImagePath(imgName, 'png');
    }
  }

  return {
    depools: {
      light: {
        png: getImagePath('depools-main-light', 'png'),
      },
      dark: {
        png: getImagePath('depools-main-dark', 'png'),
      },
    },
    depoolsStakes: {
      light: {
        png: getImagePath('depools-stakes-light', 'png'),
      },
      dark: {
        png: getImagePath('depools-stakes-dark', 'png'),
      },
    },
    logo: {
      universal: {
        svg: '',
      },
    },
  };
}
