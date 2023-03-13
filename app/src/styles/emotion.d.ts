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
  third: {
    default: string;
    dark: string;
    light: string;
  };
  mono: {
    black: string;
    white: string;
    gray: {
      default: string;
      light: string;
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
  h1: string;
  h2: string;
  h3: string;
  body: string;
  caption: string;
};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
  }
}
