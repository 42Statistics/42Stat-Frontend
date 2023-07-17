import '@emotion/react';

type Colors = {
  primary: {
    default: string;
    light: string;
  };
  accent: {
    default: string;
  };
  evaluation: {
    pass: string;
    warning: string;
    fail: string;
  };
  chart: {
    up: string;
    down: string;
  };
  semantic: {
    error: string;
  };
  element: {
    hover: string;
    active: string;
  };
  mono: {
    black: string;
    white: string;
    gray300: string;
    gray200: string;
    gray100: string;
    gray50: string;
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

type ZIndex = {
  searchResult: number;
  absoluteButton: number;
  overlay: number;
  navBar: number;
  modal: number;
};

type Radius = {
  xs: string;
  sm: string;
  md: string;
  circle: string;
};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
    zIndex: ZIndex;
    radius: Radius;
  }
}
