import { DesignTokens } from '@/types';
import { injectStrict } from '@/utils/strictInjection';
import { DesignTokensKey } from '@/constants';

export function useDesignTokens() {
  const cssVars = injectStrict(DesignTokensKey);

  function setCssVariable(name: keyof DesignTokens, value: string) {
    cssVars[name] = value;
    document.documentElement.style.setProperty(name, value);
  }

  return {
    cssVars,
    setCssVariable,
  };
}

export function applyAllCssVars(cssVars: DesignTokens) {
  Object.entries(cssVars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
