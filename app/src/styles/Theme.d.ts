import '@emotion/react';

type Colors = {
  primary: {
    default: string;
    light: string;
  };
  secondary: {
    default: string;
    light: string;
  };
  mono: {
    black: string;
    white: string;
    gray: {
      300: string;
      200: string;
      100: string;
    };
  };
  background: string;
  coalition: {
    gun: string;
    gon: string;
    gam: string;
    lee: string;
  };
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
    extralight: number;
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  };
};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
  }
}
