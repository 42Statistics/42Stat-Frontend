import { css } from '@emotion/react';
import { Palette } from '@shared/atoms/paletteAtom';

export const global = (palette: Palette) => css`
  @font-face {
    font-family: Pretendard;
    src: url('/fonts/Pretendard-Thin.subset.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: Pretendard;
    src: url('/fonts/Pretendard-Regular.subset.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: Pretendard;
    src: url('/fonts/Pretendard-Medium.subset.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: Pretendard;
    src: url('/fonts/Pretendard-Bold.subset.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  html {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-display: fallback; // for UX
    font-size: 62.5%; // 1rem = 10px
    background: ${palette === 'light'
      ? 'linear-gradient(150deg, #ffffff 0%, #e7e7e9 100%)'
      : 'linear-gradient(150deg, #262626 0%, #0a0a0a 100%)'};
    background-color: ${palette === 'light' ? '#ffffff' : '#262626'};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  body {
    font-size: 1.4rem;
  }

  &:focus-visible {
    outline: 2px solid blue;
  }

  // apexcharts 다크 모드 시 배경색이 변경되지 않는 버그
  .apexcharts-canvas > svg {
    background-color: transparent !important;
  }
`;
