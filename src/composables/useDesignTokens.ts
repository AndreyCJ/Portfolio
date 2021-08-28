import { DesignTokens } from '@/types';
import { injectStrict } from '@/utils/strictInjection';
import { DesignTokensKey } from '@/constants';

interface IUseDesignTokens {
  cssVars: DesignTokens;
  setCssVariable: (name: keyof DesignTokens, value: string) => void;
}

export function useDesignTokens(): IUseDesignTokens {
  const cssVars: DesignTokens = injectStrict(DesignTokensKey);

  function setCssVariable(name: keyof DesignTokens, value: string): void {
    cssVars[name] = value;
    document.documentElement.style.setProperty(name, value);
  }

  return {
    cssVars,
    setCssVariable,
  };
}

export function applyAllCssVars(cssVars: Partial<DesignTokens>): void {
  Object.entries(cssVars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
