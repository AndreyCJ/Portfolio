export type DesignTokenColors =
  | '--color-primary'
  | '--color-back'
  | '--color-fore'
  | '--color-blue'
  | '--color-pure-black'
  | '--color-dark'
  | '--color-white-warm'
  | '--color-light-yellow';

export type DesignTokens = {
  [color in DesignTokenColors]: string;
};
