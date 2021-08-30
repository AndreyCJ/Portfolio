import { AppModule } from '@/types';
import { DesignTokensKey } from '@/constants';
import { applyAllCssVars } from '@/composables/useDesignTokens';
import DesignTokensState from '@/styles/design-tokens.json';

export const install: AppModule = (app) => {
  app.provide(DesignTokensKey, DesignTokensState);

  applyAllCssVars(DesignTokensState);
};
