const colors = {
  primary: {
    default: '#2B3E77',
    light: '#dde8ed',
  },
  accent: {
    default: '#00C48C',
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
  mono: {
    black: '#161616',
    white: '#f9f9f9',
    gray300: '#777777',
    gray200: '#999999',
    gray100: '#bbbbbb',
    gray50: '#dddddd',
  },
  background: '#f9f9f9',
};

const fonts = {
  size: {
    h1: '2.8rem',
    h2: '2.0rem',
    h3: '1.6rem',
    body: '1.4rem',
    caption: '1.1rem',
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
  searchResult: 100,
  absoluteButton: 200,
  overlay: 300,
  navBar: 400,
  modal: 500,
};

const radius = {
  xs: '0.5rem',
  sm: '1rem',
  md: '2rem',
  circle: '50%',
};

export const defaultTheme = {
  colors,
  fonts,
  zIndex,
  radius,
};
