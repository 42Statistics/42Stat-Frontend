const colors = {
  primary: {
    default: '#2b3e77',
    light: '#dde8ed',
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
    up: '#00c48c',
    down: '#e31f2c',
  },
  semantic: {
    error: '#b1232d',
  },
  element: {
    hover: '#f8f8f8',
    active: '#eeeeee',
  },
  mono: {
    black: '#161616',
    white: '#ffffff',
    gray300: '#767676', // 웹 접근성 하한
    gray200: '#999999',
    gray100: '#bbbbbb',
    gray50: '#dddddd',
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
  absoluteButton: 200,
  modal: 1000,
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

export const defaultTheme = {
  colors,
  fonts,
  zIndex,
  radius,
  shadow,
};
