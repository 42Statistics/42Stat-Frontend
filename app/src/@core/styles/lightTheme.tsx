import type { Theme } from '@emotion/react';

const colors = {
  primary: {
    default: '#2b3e77',
    light: '#c4ccdf',
  },
  accent: {
    default: '#00c48c',
    light: '#90e5cd',
  },
  evaluation: {
    pass: '#60c0c4',
    warning: '#f5b461',
    fail: '#f17c88',
  },
  chart: {
    primary: {
      default: '#2b3e77',
      light: '#c4ccdf',
    },
    accent: {
      default: '#00c48c',
      light: '#90e5cd',
    },
  },
  semantic: {
    error: '#b1232d',
  },
  element: {
    hover: '#f0f0f0',
    active: '#e2e2e2',
  },
  background: {
    landing: {
      default: '#070f21',
      theme: '#070f21',
    },
    main: {
      default: 'linear-gradient(150deg, #ffffff 0%, #e7e7e9 100%)',
      theme: '#f2f2f2',
    },
    box: {
      default: '#ffffff',
      shadow: {
        default: '2px 6px 20px #eeeeee',
        hover: '2px 6px 20px #dddddd',
      },
    },
    skeleton: {
      default: '#ffffff',
      gradient: 'linear-gradient(110deg, #ffffff 8%, #f5f5f5 18%, #ffffff 33%)',
    },
  },
  mono: {
    absolute: {
      black: '#161616',
      white: '#ffffff',
    },
    black: '#161616',
    white: '#ffffff',
    gray500: '#767676', // 웹 접근성 하한
    gray400: '#999999',
    gray300: '#bbbbbb',
    gray200: '#dddddd',
    gray100: '#f0f0f0',
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

export const lightTheme: Theme = {
  colors,
  fonts,
  zIndex,
  radius,
  shadow,
};
