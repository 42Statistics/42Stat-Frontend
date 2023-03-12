import { css } from '@emotion/react';
import { theme } from './theme';

export const global = css`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('fonts/NotoSansKR-Regular.otf');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('fonts/NotoSansKR-Medium.otf');
    font-weight: medium;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('fonts/NotoSansKR-Bold.otf');
    font-weight: bold;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.background};
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
