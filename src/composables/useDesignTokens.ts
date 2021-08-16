import { onBeforeMount, provide, reactive, watch } from 'vue';

import DesignTokensState from '@/styles/design-tokens.json';
import { DesignTokensKey } from '@/constants';
import { DesignTokens } from '@/types';

export function useDesignTokens() {
  const designTokens = reactive(DesignTokensState);

  provide(DesignTokensKey, designTokens);

  function updateVariables(cssVars: DesignTokens) {
    Object.entries(cssVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }

  watch(designTokens, (n) => {
    updateVariables(n);
  });

  onBeforeMount(() => {
    updateVariables(designTokens);
  });

  return designTokens;
}
