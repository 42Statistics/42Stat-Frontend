export const theme = {
  colors: {
    primary: {
      default: '#765DA6',
      light: '#EFEAF5',
    },
    secondary: {
      default: '#F9837C',
      light: '#FFB1B7',
    },
    third: {
      default: '#70B6C1',
      dark: '#357E89',
      light: '#B9E7EE',
    },
    mono: {
      black: '#161616',
      white: '#F9F9F9',
      gray: {
        default: '#777777',
        light: '#CCCCCC',
      },
    },
    background: '#E4E3EA',
    coalition: {
      gun: '#FCC21B',
      gon: '#559F7A',
      gam: '#649CBC',
      lee: '#BB4140',
    },
  },
};

// FIXME: const theme = useTheme<Theme>() 사용하기
export type Theme = typeof theme;
