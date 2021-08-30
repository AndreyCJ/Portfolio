import { DesignTokens } from '@/types';
import { InjectionKey } from 'vue';

export const myEmail = 'andrey.chebotar.me@gmail.com';
export const DesignTokensKey: InjectionKey<DesignTokens> =
  Symbol('designTokens');
