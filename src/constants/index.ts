import { DesignTokens } from '@/types';
import { InjectionKey } from 'vue';

export const DesignTokensKey: InjectionKey<DesignTokens> =
  Symbol('designTokens');
