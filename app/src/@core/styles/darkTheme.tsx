import type { Theme } from '@emotion/react';

const colors = {
  primary: {
    default: '#ffffff',
    light: '#383b3f',
  },
  accent: {
    default: '#00c48c',
    light: '#90e5cd',
  },
  evaluation: {
    pass: '#1ee2e9',
    warning: '#f4ff79',
    fail: '#f65252',
  },
  chart: {
    primary: {
      default: '#4c4ee3',
      light: '#c4ccdf',
    },
    accent: {
      default: '#0fecd9',
      light: '#90e5cd',
    },
  },
  semantic: {
    error: '#ef3636',
    warning: '#fe642e',
  },
  element: {
    hover: '#262626',
    active: '#1f1f1f',
  },
  background: {
    landing: {
      default: '#070f21',
      theme: '#070f21',
    },
    main: {
      default: 'linear-gradient(150deg, #262626 0%, #0a0a0a 100%)',
      theme: '#151515',
    },
    box: {
      default: '#2b2c30',
      shadow: {
        default: 'none',
        hover: 'none',
      },
    },
    skeleton: {
      default: '#161616',
      gradient: 'linear-gradient(110deg, #161616 8%, #1f1f1f 18%, #161616 33%)',
    },
  },
  mono: {
    absolute: {
      black: '#161616',
      white: '#ffffff',
    },
    black: '#ffffff',
    white: '#161616',
    gray500: '#bbbbbb',
    gray400: '#777777',
    gray300: '#555555',
    gray200: '#383838',
    gray100: '#262626',
  },
};

const fonts = {
  size: {
    h1: '2.6rem',
    h2: '2.2rem',
    h3: '1.8rem',
    body1: '1.6rem',
    body2: '1.4rem',
    caption: '1.2rem',
  },
  weight: {
    thin: 100,
    // extralight: 200,
    // light: 300,
    regular: 400,
    medium: 500,
    // semibold: 600,
    bold: 700,
    extrabold: 800,
    // black: 900,
  },
};

const zIndex = {
  modal: 1000,
  dropdown: 500,
  tooltip: 300,
  absoluteButton: 200,
};

const radius = {
  xs: '0.5rem',
  sm: '1rem',
  md: '2rem',
  circle: '50%',
};

const shadow = {
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

export const darkTheme: Theme = {
  colors,
  fonts,
  zIndex,
  radius,
  shadow,
};
