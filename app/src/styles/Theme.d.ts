import '@emotion/react';

type Colors = {
  primary: {
    default: string;
    light: string;
  };
  accent: {
    default: string;
  };
  semantic: {
    pass: string;
    warning: string;
    fail: string;
  };
  mono: {
    black: string;
    white: string;
    gray300: string;
    gray200: string;
    gray100: string;
  };
  background: string;
};

type Fonts = {
  size: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
    caption: string;
  };
  weight: {
    thin: number;
    // extralight: number;
    // light: number;
    regular: number;
    medium: number;
    // semibold: number;
    bold: number;
    // extrabold: number;
    // black: number;
  };
};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
  }
}
