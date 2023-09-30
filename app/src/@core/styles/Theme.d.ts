import '@emotion/react';

type Colors = {
  primary: {
    default: string;
    light: string;
  };
  accent: {
    default: string;
    light: string;
  };
  evaluation: {
    pass: string;
    warning: string;
    fail: string;
  };
  chart: {
    primary: {
      default: string;
      light: string;
    };
    accent: {
      default: string;
      light: string;
    };
  };
  semantic: {
    error: string;
  };
  element: {
    hover: string;
    active: string;
  };
  background: {
    landing: {
      default: string;
      theme: string;
    };
    main: {
      default: string;
      theme: string;
    };
    box: {
      default: string;
      shadow: {
        default: string;
        hover: string;
      };
    };
    skeleton: {
      default: string;
      gradient: string;
    };
  };
  mono: {
    absolute: {
      black: string;
      white: string;
    };
    black: string;
    white: string;
    gray500: string;
    gray400: string;
    gray300: string;
    gray200: string;
    gray100: string;
  };
};

type Fonts = {
  size: {
    h1: string;
    h2: string;
    h3: string;
    body1: string;
    body2: string;
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
  absoluteButton: number;
  modal: number;
  dropdown: number;
  tooltip: number;
};

type Radius = {
  xs: string;
  sm: string;
  md: string;
  circle: string;
};

type Shadow = {
  md: string;
};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
    zIndex: ZIndex;
    radius: Radius;
    shadow: Shadow;
  }
}
